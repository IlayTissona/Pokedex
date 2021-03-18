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

pokemon.get("/random", async (req, res) => {
  const existingPokemons = fs
    .readdirSync(`${process.cwd()}/routes/JSON-data/recieved`, {
      withFileTypes: false,
    })
    .map((fileName) => fileName.replace(".json", ""));
  const randomPokemonName =
    existingPokemons[Math.floor(Math.random() * (existingPokemons.length - 1))];

  res.json(getExisting(randomPokemonName));
});

pokemon.get("/:name", async (req, res) => {
  const pokemonName = req.params.name;
  const existing = getExisting(pokemonName);
  if (existing) return res.json(existing);
  const responseFullObj = await axios
    .get(collectionURL + "/" + pokemonName)
    .catch((e) => res.send(e));
  const pokemonFullObj = generateResponsePokemon(responseFullObj.data);
  if (!pokemonFullObj) {
    return res.sendStatus(404);
  }
  res.json(setExisting(pokemonFullObj));
});

module.exports = pokemon;
