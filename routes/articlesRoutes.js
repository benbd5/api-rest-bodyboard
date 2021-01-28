const express = require("express");
// const bodyboardController = require("../controllers/bodyboardController");
const articlesController = require("../controllers/articlesController");

const router = express.Router();

// Routes GET pour afficher les articles en fonction de leur catégorie dans leur page dédiée
router.get("/bodyboard", articlesController.article_bodyboard_index);
router.get("/palmes", articlesController.article_palmes_index);
router.get("/combinaisons", articlesController.article_combinaisons_index);
router.get("/accessoires", articlesController.article_accessoires_index);

// Afficher la page posts
router.get("/articles/posts", articlesController.article_create_get);

// Afficher les articles individuellement en fontion de leur id
router.get("/articles/:id", articlesController.articles_details);

// Route POST pour créer les articles
router.post("/posts", articlesController.article_create_post);

// Route PUT pour modifier les articles

// Route DELETE pour supprimer les articles

module.exports = router;
