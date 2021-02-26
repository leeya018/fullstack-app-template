const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  id_number: { type: String, required: true },
  firstName: { type: String, required: true },
});

module.exports = mongoose.model("users", User);
