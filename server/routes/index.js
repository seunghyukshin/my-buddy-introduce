import express from "express";
const router = express.Router();

import User from "../models/user.js";

router.get("/users", (req, res) => {
  User.find((err, users) => {
    if (err) return res.status(500).send({ error: "db failure" });
    res.json(users);
  });
});

// CREATE USER
router.post("/users", (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.author = req.body.author;

  user.save((err) => {
    if (err) {
      console.log(err);
      res.json({ result: 0 });
      return;
    }
    res.json({ result: 1 });
  });
});

export default router;
