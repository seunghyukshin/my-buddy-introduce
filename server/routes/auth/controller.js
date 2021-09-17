import jwt from "jsonwebtoken";
import { promisify } from "util";
import { redisClient } from "../../utils/redis.js";

import User from "../../models/user.js";

/*
    POST /api/auth/login
    {
        name,
        email,
        social,
    }
*/

const login = (req, res) => {
  const { name, email, social } = req.body;
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
    return User.create(name, email, social);
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

/*
    GET /api/auth/verify
*/

const verify = (req, res) => {
  res.json({
    success: true,
    info: req.decoded,
  });
};

// TO DO : refresh router
const refresh = () => {
  const secret = req.app.get("jwt-secret");
  const options = JSON.parse(process.env.REFRESH_OPTIONS);

  return jwt.sign({}, secret, options);
};

const refreshVerify = async (token, username) => {
  const getAsync = promisify(redisClient.get).bind(redisClient);
  const SUCCESS_RESULT = { ok: true };
  const FAIL_RESULT = { ok: false };
  try {
    const data = await getAsync(username);
    if (token === data) {
      return SUCCESS_RESULT;
    } else {
      return FAIL_RESULT;
    }
  } catch (error) {
    return FAIL_RESULT;
  }
};
export { login, verify, refresh, refreshVerify };
