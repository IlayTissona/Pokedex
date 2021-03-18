const { Router } = require("express");
const axios = require("axios");
const fs = require("fs");
const e = require("express");
const {
  setExisting,
  getExisting,
  generateResponsePokemon,
} = require("../utils/pokeAPI");

require("dotenv").config();

const collectionURL = process.env.POKEAPI_URL + "pokemon";
const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  const pokemonName = req.params.name;

  const responseFullObj = await axios
    .get(collectionURL + "/" + pokemonName)
    .catch((e) => res.send(e));
  const pokemonFullObj = generateResponsePokemon(responseFullObj.data);
  if (!pokemonFullObj) {
    return res.sendStatus(404);
  }
  res.json(setExisting(pokemonFullObj));
});

pokemon.get("/catch/:name", async (req, res) => {
  const pokemonName = req.params.name;
  let pokemonFullObj = getExisting(pokemonName);
  if (!pokemonFullObj) {
    try {
      const responseFullObj = await axios.get(
        collectionURL + "/" + pokemonName
      );
      pokemonFullObj = generateResponsePokemon(responseFullObj.data);
    } catch (e) {
      return res.send(e.message);
    }
  }
  pokemonFullObj.catched = !pokemonFullObj.catched;
  res.json(setExisting(pokemonFullObj));
});

module.exports = pokemon;
