const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // retourne le token compris dans le headers de la requête (retourne un array avec BEARER en [0] et le token en [1])
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;

    // Si on a userId dans la requête et qu'il est différent du userId on retourne une erreur
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      // Si tout va bien, on continue avec next()
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
