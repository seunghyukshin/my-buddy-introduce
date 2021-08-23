/*
    POST /api/auth/register
    {
        username,
        password
    }
*/
const register = (req, res) => {
  res.send("this router is working");
};

export { register };
// import User from "../../models/user.js";

// router.get("/login", (req, res) => {
//   User.find((err, users) => {
//     if (err) return res.status(500).send({ error: "db failure" });
//     res.json(users);
//   });
// });

// // CREATE USER
// router.post("/register", (req, res) => {
//   const user = new User();
//   user.name = req.body.name;
//   user.author = req.body.author;

//   user.save((err) => {
//     if (err) {
//       console.log(err);
//       res.json({ result: 0 });
//       return;
//     }
//     res.json({ result: 1 });
//   });
// });
