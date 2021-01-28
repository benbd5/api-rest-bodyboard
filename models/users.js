const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// uniqueValidator pour éviter les erreurs dans mongoDB au niveau des adresses mails
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
