/*
    POST /api/auth/register
    {
        username,
        password
    }
*/
import User from "../../models/user.js";

const login = (req, res) => {
  const { name, email, social, friends } = req.body;
  let newUser = null;

  const create = (user) => {
    if (user) {
      // throw new Error ("이미 존재");
    } else {
      return User.create(name, email, social, friends);
    }
  };

  const count = (user) => {
    newUser = user;
    return User.count({}).exec();
  };

  // assign admin if count is 1
  const assign = (count) => {
    if (count === 1) {
      return newUser.assignAdmin();
    } else {
      // if not, return a promise that returns false
      return Promise.resolve(false);
    }
  };

  const respond = (count) => {
    res.json({
      msg: "success",
    });
  };

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };
  console.log("aa", User);
  User.findOneByUsername(name)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError);
};

export { login };

// router.get("/login", (req, res) => {
//   User.find((err, users) => {
//     if (err) return res.status(500).send({ error: "db failure" });
//     res.json(users);
//   });
// });
