const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send({ greeting: "hello react x node.js" });
});

module.exports = router;
