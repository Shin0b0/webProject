// routes/about.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello this is about about");
});
module.exports = router;
