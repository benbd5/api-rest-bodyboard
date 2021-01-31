const express = require("express");
const router = express.Router();

// GET home page
router.get("/", (req, res) => {
  res.locals.title = "Accueil";
  res.render("index");
});

module.exports = router;
