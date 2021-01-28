if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express"),
  app = express(),
  ejs = require("ejs"),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

// ---------- Import controllers/routes ----------
const homeRouter = require("./routes/home");
const articlesRouter = require("./routes/articlesRoutes");

// Set
app.set("view engine", "ejs");

app.use(express.static("public"));

// Parse application/json, basically parse incoming Request Object as a JSON Object
app.use(bodyParser.json());

// Sert pour POST et PUT lors de l'envoi de données au seveur
app.use(express.urlencoded({ extended: true }));

// Pour PUT et DELETE (?_method=PUT/DELETE)
app.use(methodOverride("_method"));

// ---------- Mongo ----------
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Get the default connection and check if error
const db = mongoose.connection;
db.on("err", (err) => console.log(err));
db.once("open", () => console.log("Connected to mongoose"));

// ---------- Routes ----------
app.use("/", homeRouter);
app.use(articlesRouter);

// Server
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
