import jwt from "jsonwebtoken";
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
  let newUser = null;

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
    const { name, email, social, friends, contents } = user;
    const promise = new Promise((resolve, reject) => {
      jwt.sign(
        { name, email, social, friends, contents },
        secret,
        {
          expiresIn: "7d", //
          issuer: "my-home",
          subject: "userInfo",
        },
        (err, token) => {
          if (err) reject(err);
          resolve(token);
        }
      );
    });
    return promise;
  };

  const respond = (token) => {
    console.log(token);
    console.log("login success");
    res.json({
      msg: "login success",
      token,
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
  console.log(req.headers);
  const token = req.headers["x-access-token"] || req.query.token;
  console.log(token);
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "토큰값이 유효하지 않습니다.",
    });
  }

  const promise = new Promise((resolve, reject) => {
    jwt.verify(token, req.app.get("jwt-secret"), (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  const respond = (token) => {
    res.json({
      success: true,
      info: token,
    });
  };

  const onError = (error) => {
    res.status(403).json({ success: false, message: error.message });
  };

  promise.then(respond).catch(onError);
};

export { login, verify };
