const express = require("express");
const bodyboardController = require("../controllers/bodyboardController");
const articlesController = require("../controllers/articlesController");

const router = express.Router();

// router.get("/bodyboard", bodyboardController.bodyboard_index);
// router.post("/posts", bodyboardController.bodyboard_create_post);

// Routes GET pour afficher les articles en fonction de leur catégorie dans leur page dédiée
router.get("/bodyboard", articlesController.article_bodyboard_index);
router.get("/palmes", articlesController.article_palmes_index);
router.get("/combinaisons", articlesController.article_combinaisons_index);
router.get("/accessoires", articlesController.article_accessoires_index);

// Route POST pour créer les articles
router.post("/posts", articlesController.article_create_post);

module.exports = router;
