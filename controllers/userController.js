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
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "user created" }))
        .catch((err) => res.status(400).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
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
          req.session.userId = user._id;
          res.send("connecté");
          console.log(req.session.userId);

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
