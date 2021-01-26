const express = require("express");
const bodyboardController = require("../controllers/bodyboardController");

const router = express.Router();

router.get("/bodyboard", bodyboardController.bodyboard_index);
router.post("/posts", bodyboardController.bodyboard_create_post);

module.exports = router;
