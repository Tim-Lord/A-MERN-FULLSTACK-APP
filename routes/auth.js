const express = require("express");
const router = express.Router();

//@route       GET api/auth
//@desc        Get Logged in User
//@access      PRIVATE
router.get("/", (req, res) => {
  res.send("Get Logged in User");
});

//@route       POST api/auth
//@desc        Log in user
//@access      Public
router.post("/", (req, res) => {
  res.send("Get Logged in User");
});

module.exports = router;
