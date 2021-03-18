const { Router } = require("express");
const axios = require("axios");
const fs = require("fs");
const e = require("express");
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

//name. height, weight, types, catched, id

//----------------------------------------------Functions-------------------------------------------------//
function generateResponsePokemon(fullObj) {
  const { name, height, weight, id } = fullObj;
  const types = fullObj.types.map((typeObj) => typeObj.type.name);
  const { back_default, front_default } = fullObj.sprites;
  const catched = false;
  return {
    name,
    height,
    weight,
    types,
    id,
    catched,
    back_default,
    front_default,
  };
}

function getExisting(pokemonName) {
  if (
    fs.existsSync(
      `${process.cwd()}/routes/JSON-data/recieved/${pokemonName}.json`
    )
  ) {
    return JSON.parse(
      fs.readFileSync(
        `${process.cwd()}/routes/JSON-data/recieved/${pokemonName}.json`
      )
    );
  }
  return null;
}

function setExisting(pokemonObj) {
  fs.writeFileSync(
    `${process.cwd()}/routes/JSON-data/recieved/${pokemonObj.name}.json`,
    JSON.stringify(pokemonObj)
  );
  return pokemonObj;
}

module.exports = pokemon;
