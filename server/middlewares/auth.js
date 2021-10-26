import jwt from "jsonwebtoken";

import cookieParser from "../utils/cookieParser.js";

/* access token 검사 */
const authMiddleware = (req, res, next) => {
  // const token = cookieParser(req.headers.cookie, "accessToken");
  const token = cookieParser(req.headers.cookie, "refreshToken");
  console.log(token);
  // const token = req.headers["x-access-token"] || req.query.token;
  if (!token) {
    console.log("no token..");
    return res.status(401).json({
      success: false,
      message: "not logged in",
    });
  }

  const promise = new Promise((resolve, reject) => {
    jwt.verify(token, req.app.get("jwt-secret"), (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  const onError = (error) => {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  };

  promise
    .then((decoded) => {
      req.decoded = decoded;
      next();
    })
    .catch(onError);
};

export default authMiddleware;
