const { Router } = require("express");
const axios = require("axios");
const Pokemon = require("../mongo");
const e = require("express");
const {
  setExisting,
  getExisting,
  generateResponsePokemon,
} = require("../utils/pokeAPI");

require("dotenv").config();

const collectionURL = process.env.POKEAPI_URL + "pokemon";
const pokemon = Router();

pokemon.get("/random", async (req, res) => {
  Pokemon.find({}).then((allPokemons) => {
    res.json(allPokemons[Math.floor(Math.random() * (allPokemons.length - 1))]);
  });
});

pokemon.get("/:name", async (req, res) => {
  const pokemonName = req.params.name;
  const existing = await getExisting(pokemonName);
  if (existing._id) return res.json(existing);
  const responseFullObj = await axios
    .get(collectionURL + "/" + pokemonName)
    .catch((e) => e);

  if (!responseFullObj.data) {
    return res.sendStatus(404);
  }
  const pokemonFullObj = generateResponsePokemon(responseFullObj.data);
  if (!pokemonFullObj) {
    return res.sendStatus(404);
  } else {
    res.json(setExisting(pokemonFullObj));
  }
});

module.exports = pokemon;
