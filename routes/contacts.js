const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Contact = require("../models/Contacts");

//@route       GET api/contacts
//@desc        Get all contacts
//@access      PRIVATE
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route       POST api/contacts
//@desc        Add new contact
//@access      PRIVATE
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

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
