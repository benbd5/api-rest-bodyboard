const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const contactController = require("../controllers/contactController");

// GET home page
router.get("/forms/contact", contactController.contact_get);

router.post("/forms/send", contactController.sendMessage);

module.exports = router;
