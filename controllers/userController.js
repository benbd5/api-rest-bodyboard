const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

// ---------- Afficher les pages d'inscription et de connexion ----------
const register_get = (req, res) => {
  res.render("auth/register");
};

const login_get = (req, res) => {
  res.render("auth/login");
};

// ---------- S'inscrire et se connecter ----------
const register = (req, res) => {
  User.create(req.body, (err, user) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};

const login = (req, res) => {
  // trouver un seul utilisateur dans la base de donnée grâce à l'adresse mail unique
  User.findOne({ email: req.body.email })
    .then((user) => {
      // vérifie si on a trouvé un utilisateur
      if (!user) {
        // return res.status(401).json({ err: "Utilisateur non trouvé !" });
        return res.redirect("/auth/login");
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ err: "Mot de passe incorrect !" });
          }
          req.session.userId = user._id; // assigne l'id de la db
          req.session.name = user.name; // assigne le name de la db
          res.redirect("/forms/posts");

          /*res.status(200).json({
            //   id de l'utilisateur :
            userId: user._id,
            // jwt.sign() pour encoder l'id dans le Token
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });*/
        })
        .catch((err) => res.status(500).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};

// ---------- Déconnexion ----------
const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
    console.log(req.session);
  });
};

// ---------- Exports ----------
module.exports = {
  register_get,
  login_get,
  register,
  login,
  logout,
};
