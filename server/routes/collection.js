const { Router } = require("express");
const axios = require("axios");
const {
  setExisting,
  getExisting,
  generateResponsePokemon,
  getAllExisting,
} = require("../utils/pokeAPI");
const collectionURL = process.env.POKEAPI_URL + "pokemon";
const collection = Router();
const Pokemon = require("../mongo");

collection.get("/", (req, res) => {
  getAllExisting().then((allPokemons) => {
    res.json(allPokemons.filter((poke) => poke.catched));
  });
});

collection.post("/catch/:name", async (req, res) => {
  const pokemonName = req.params.name;
  let pokemonFullObj = await getExisting(pokemonName);
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
  pokemonFullObj.catched = true;
  setExisting(pokemonFullObj);
  res.json(pokemonFullObj);
});

collection.delete("/release/:name", async (req, res) => {
  const pokemonName = req.params.name;
  let pokemonFullObj = await getExisting(pokemonName);
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
  pokemonFullObj.catched = false;
  setExisting(pokemonFullObj);
  res.json(pokemonFullObj);
});

collection.get("/suggestions/:value", async (req, res) => {
  const value = req.params.value;
  Pokemon.find({}).then((allPokemons) => {
    const searchSuggestions = allPokemons.filter((pokemon) =>
      pokemon.name.includes(value)
    );
    res.json(searchSuggestions.map((pokemon) => pokemon.name));
  });
});

module.exports = collection;
