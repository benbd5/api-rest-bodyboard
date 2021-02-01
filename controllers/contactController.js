const nodemailer = require("nodemailer");

const contact_get = (req, res) => {
  res.locals.title = "Contact";

  res.render("forms/contact");
};

const sendMessage = async (req, res) => {
  const output = `
    <p>Nouvelle requête :</p>
      <h3>Contact</h3>
      <ul>  
        <li>Nom: ${req.body.lastName}</li>
        <li>Prénom: ${req.body.firstName}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <h4>Sujet : ${req.body.subject}</h4>
      <p>${req.body.message}</p>
    `;

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    service: "hotmail",
    auth: {
      user: process.env.HOST,
      pass: process.env.HOST_MDP,
    },
    tls: { rejectUnauthorized: false },
  });

  const msg = {
    from: process.env.HOST,
    to: process.env.TO_MAIL,
    subject: "Requête contact",
    text: "Vous avez reçu une requête",
    html: output,
  };

  transporter.sendMail(msg, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent" + info.response);
    res.redirect("/");
  });
};

module.exports = { sendMessage, contact_get };
