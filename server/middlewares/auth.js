import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.query.token;
  console.log(token);
  if (!token) {
    return res.status(403).json({
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
    console.log(error.message);
    res.status(403).json({
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
