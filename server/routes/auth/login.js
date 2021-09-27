import jwt from "jsonwebtoken";
import { redisClient } from "../../utils/redis.js";

import User from "../../models/user.js";

/*
    POST /api/auth/login
    {
        name,
        email,
        profileImage,
        social,
    }
*/

const login = (req, res) => {
  const { name, email, profileImage, social } = req.body;
  let userData = null;
  const secret = req.app.get("jwt-secret");
  const accessOptions = JSON.parse(process.env.ACCESS_OPTIONS);
  const refreshOptions = JSON.parse(process.env.REFRESH_OPTIONS);
  const checkId = (user) => {
    if (user) {
      userData = user;
      return User.updateToken(user, social);
    } else {
      return findByEmail(user);
    }
  };

  const findByEmail = (user) => {
    if (!email) {
      return create();
    } else {
      return User.findOneByUserEmail(email).then(checkEmail);
    }
  };

  const checkEmail = (user) => {
    if (user) {
      userData = user;
      return User.updateAnotherSocial(user, social);
    } else {
      return create(user);
    }
  };

  const create = () => {
    return User.create(name, email, profileImage, social);
  };

  const sign = () => {
    const payload = {
      name,
      email,
      social,
    };

    const promise = new Promise((resolve, reject) => {
      jwt.sign(payload, secret, accessOptions, (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });

    return promise;
  };

  const respond = (accessToken) => {
    const refreshToken = jwt.sign({}, secret, refreshOptions);
    redisClient.set(name, refreshToken);

    res.json({
      msg: "login success",
      userInfo: userData,
      token: {
        accessToken,
        refreshToken,
      },
    });
  };

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };

  User.findOneBySocialId(social)
    .then(checkId)
    .then(sign)
    .then(respond)
    .catch(onError);
};

export default login;
