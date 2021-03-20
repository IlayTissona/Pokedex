const mongoose = require("mongoose");
require("dotenv").config();
const password = process.env.DB_PASSWORD;

const url = process.env.DB_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const pokemonSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number,
  types: [String],
  id: Number,
  catched: Boolean,
  back_default: String,
  front_default: String,
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
