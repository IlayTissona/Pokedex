const { Router } = require("express");
const fs = require("fs");
const {
  setExisting,
  getExisting,
  generateResponsePokemon,
  getAllExisting,
} = require("../utils/pokeAPI");

const collection = Router();

collection.get("/", (req, res) => {
  const allPokemons = getAllExisting();
  res.json(allPokemons.filter((poke) => poke.catched));
});

collection.post("/catch/:name", async (req, res) => {
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
  pokemonFullObj.catched = true;
  res.json(setExisting(pokemonFullObj));
});

module.exports = collection;
