const express = require("express");
const router = express.Router();

const User = require("./models/user");
router.get("/", function (req, res) {
  // GET ALL BOOKS
  User.find(function (err, users) {
    if (err) return res.status(500).send({ error: "database failure" });
    res.json(users);
  });
});

router.post("/", function (req, res) {
  const user = new User();
  // console.log(req);
  user.name = req.body.name;
  user.author = req.body.author;

  user.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    }

    res.json({ result: 1 });
  });
});

module.exports = router;
