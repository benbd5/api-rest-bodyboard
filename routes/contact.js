const express = require("express");
const router = express.Router();
// const nodemailer = require("nodemailer");

// GET home page
router.get("/forms/contact", (req, res) => {
  res.locals.title = "Contact";

  res.render("forms/contact");
});

/*
router.post("/forms/send", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "smtp.gmail.com",
    port: 587,
    secure: true,
    pool: true,
    auth: {
      user: process.env.USER,
      pass: process.env.MDP,
    },
  });

  var mailOptions = {
    from: "benjibdu85@gmail.com",
    to: "barbara.marchand.5@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  //   transporter.close();
});
*/
module.exports = router;
