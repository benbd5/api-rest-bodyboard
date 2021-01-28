const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Afficher les pages d'inscription et de connexion
router.get("/register", userController.register_get);
router.get("/login", userController.login_get);

// S'inscrire et se connecter
router.post("/register", userController.register);
router.post("/login", userController.login);

// Déconnexion
router.get("/logout", userController.logout);

module.exports = router;
