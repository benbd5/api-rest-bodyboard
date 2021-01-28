const Article = require("../models/articles");

// bodyboard_index, bodyboard_details, bodyboard_create_get, bodyboard_create_post, bodyboard_delete

// ---------- GET ----------
// Afficher les articles en fonction de leur catégorie dans leur page dédiée
const article_bodyboard_index = async (req, res) => {
  const articles = await Article.find({ category: "bodyboard" }).sort({
    price: 1,
  }); // sort price (1) = croissant et (-1) décroissant

  // articlesTotal pour afficher le nombre d'articles sur la page
  const articlesTotal = await Article.countDocuments({ category: "bodyboard" });

  res.render("articles/bodyboard", { articles, articlesTotal });
};

const article_palmes_index = async (req, res) => {
  const articles = await Article.find({ category: "palmes" }).sort({
    price: 1,
  });

  const articlesTotal = await Article.countDocuments({ category: "palmes" });

  res.render("articles/palmes", { articles, articlesTotal });
};

const article_combinaisons_index = async (req, res) => {
  const articles = await Article.find({ category: "combinaisons" }).sort({
    price: 1,
  });

  const articlesTotal = await Article.countDocuments({
    category: "combinaisons",
  });

  res.render("articles/combinaisons", { articles, articlesTotal });
};

const article_accessoires_index = async (req, res) => {
  const articles = await Article.find({ category: "accessoires" }).sort({
    price: 1,
  });

  const articlesTotal = await Article.countDocuments({
    category: "accessoires",
  });

  res.render("articles/accessoires", { articles, articlesTotal });
};

// Afficher les articles individuellement avec leur id
const articles_details = async (req, res) => {
  try {
    const articles = await Article.findById(req.params.id);
    res.render("articles/showArticle", { articles });
  } catch {
    res.redirect("/");
  }
};

// ---------- POST  ----------
// Afficher la page posts
const article_create_get = (req, res) => {
  res.render("articles/posts");
};

// Poster de nouveaux articles
const article_create_post = (req, res) => {
  console.log(req.body.category);
  const newArticle = new Article({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    infos: req.body.infos,
  });

  newArticle.save((err, docs) => {
    if (!err) res.redirect("/");
    else console.log("il y a une erreur " + err);
  });
};

// ---------- PUT  ----------

// Exports des modules controllers vers articlesRoutes
module.exports = {
  article_bodyboard_index,
  article_palmes_index,
  article_combinaisons_index,
  article_accessoires_index,
  article_create_post,
  article_create_get,
  articles_details,
};
