const { Router } = require("express");
const axios = require("axios");
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
  res.send(pokemonFullObj);
});

//name. height, weight, types, catched, id

//----------------------------------------------Functions-------------------------------------------------//
function generateResponsePokemon(fullObj) {
  const { name, height, weight, types, id } = fullObj;
  return { name, height, weight, types, id };
}
module.exports = pokemon;
