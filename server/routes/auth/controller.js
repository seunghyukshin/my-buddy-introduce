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
        friends,
        contents
    }
*/

const login = (req, res) => {
  const { name, email, social, friends } = req.body;
  const secret = req.app.get("jwt-secret");
  const accessOptions = JSON.parse(process.env.ACCESS_OPTIONS);
  const refreshOptions = JSON.parse(process.env.REFRESH_OPTIONS);
  const checkId = (user) => {
    if (user) {
      console.log("a");
      return User.updateToken(user, social);
    } else {
      console.log("b");
      return findByEmail(user);
    }
  };

  const findByEmail = (user) => {
    if (!email) {
      console.log("클라이언트로부터 받아온 이메일이 존재하지 않습니다.");
      // throw Error("클라이언트로부터 받아온 이메일이 존재하지 않습니다.")
      // go create
      return create();
    } else {
      console.log("c");
      return User.findOneByUserEmail(email).then(checkEmail);
    }
  };

  const checkEmail = (user) => {
    if (user) {
      console.log("d");
      return User.updateAnotherSocial(user, social);
    } else {
      // go create
      console.log("e");
      return create();
    }
  };

  const create = () => {
    console.log("f");
    return User.create(name, email, social, friends);
  };

  const sign = (user) => {
    const { name, email, social } = user;
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
    // const refreshToken = refresh();
    const refreshToken = jwt.sign({}, secret, refreshOptions);
    redisClient.set(name, refreshToken);

    console.log("Login success");
    res.json({
      msg: "login success",
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
