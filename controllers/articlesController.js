const Article = require("../models/articles");

// bodyboard_index, bodyboard_details, bodyboard_create_get, bodyboard_create_post, bodyboard_delete

// ---------- Afficher les articles en fonction de leur catégorie dans leur page dédiée ----------
const article_bodyboard_index = async (req, res) => {
  const articles = await Article.find({ category: "bodyboard" });

  res.render("articles/bodyboard", { articles: articles });
};

const article_palmes_index = async (req, res) => {
  const articles = await Article.find({ category: "palmes" });

  res.render("articles/palmes", { articles: articles });
};

const article_combinaisons_index = async (req, res) => {
  const articles = await Article.find({ category: "combinaisons" });

  res.render("articles/combinaisons", { articles: articles });
};

const article_accessoires_index = async (req, res) => {
  const articles = await Article.find({ category: "accessoires" });

  res.render("articles/accessoires", { articles: articles });
};

// ---------- Poster de nouveaux articles ----------
const article_create_post = (req, res) => {
  const newArticle = new Article({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    infos: req.body.infos,
  });

  newArticle.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log(err);
  });
};

// Exports des modules controllers vers articlesRoutes
module.exports = {
  article_bodyboard_index,
  article_palmes_index,
  article_combinaisons_index,
  article_accessoires_index,
  article_create_post,
};
