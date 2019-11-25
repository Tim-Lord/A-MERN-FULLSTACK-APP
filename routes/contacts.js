const express = require("express");
const router = express.Router();

//@route       GET api/contacts
//@desc        Get all contacts
//@access      PRIVATE
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//@route       POST api/contacts
//@desc        Add new contact
//@access      PRIVATE
router.post("/", (req, res) => {
  res.send("Add new contact");
});

//@route       PUT api/contacts
//@desc        Update contacts
//@access      PRIVATE
router.put("/:id", (req, res) => {
  res.send("Update Contact");
});

//@route       DELETE api/contacts
//@desc        Delete contact
//@access      PRIVATE
router.delete("/", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
