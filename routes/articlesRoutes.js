const express = require("express");
const router = express.Router();

const articlesController = require("../controllers/articlesController");
const auth = require("../middlewares/auth");

// Routes GET pour afficher les articles en fonction de leur catégorie dans leur page dédiée
router.get("/bodyboard", articlesController.article_bodyboard_index);
router.get("/palmes", articlesController.article_palmes_index);
router.get("/combinaisons", articlesController.article_combinaisons_index);
router.get("/accessoires", articlesController.article_accessoires_index);

// Afficher les articles individuellement en fontion de leur id
router.get("/articles/:id", articlesController.articles_details);

// Afficher la page posts
router.get("/forms/posts", auth, articlesController.article_create_get);

// Afficher la page edit
router.get("/forms/:id/edit", auth, articlesController.articles_create_put);

// Route POST pour créer les articles
router.post("/posts", auth, articlesController.article_create_post);

// Route PUT pour modifier les articles
router.put("/articles/:id", auth, articlesController.articles_update);

// Route DELETE pour supprimer les articles
router.delete("/articles/:id", auth, articlesController.articles_delete);

module.exports = router;
