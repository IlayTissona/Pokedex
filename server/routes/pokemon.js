const { Router } = require("express");
const axios = require("axios");
const fs = require("fs");
require("dotenv").config();

const collectionURL = process.env.POKEAPI_URL + "pokemon";
const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  const pokemonName = req.params.name;
  if (
    fs.existsSync(
      `${process.cwd()}/routes/JSON-data/recieved/${pokemonName}.json`
    )
  )
    return res.send(
      fs.readFileSync(
        `${process.cwd()}/routes/JSON-data/recieved/${pokemonName}.json`
      )
    );

  const responseFullObj = await axios
    .get(collectionURL + "/" + pokemonName)
    .catch((e) => res.send(e));
  const pokemonFullObj = generateResponsePokemon(responseFullObj.data);
  if (!pokemonFullObj) {
    return res.sendStatus(404);
  }
  res.json(pokemonFullObj);
  fs.writeFileSync(
    `${process.cwd()}/routes/JSON-data/recieved/${pokemonName}.json`,
    JSON.stringify(pokemonFullObj)
  );
});

pokemon.get("/catch/:name", async (req, res) => {
  const pokemonName = req.params.name;

  if (!pokemonFullObj) {
    return res.sendStatus(404);
  }
  res.send(pokemonFullObj);
});

//name. height, weight, types, catched, id

//----------------------------------------------Functions-------------------------------------------------//
function generateResponsePokemon(fullObj) {
  const { name, height, weight, id } = fullObj;
  const types = fullObj.types.map((typeObj) => typeObj.type.name);
  const { back_default, front_default } = fullObj.sprites;
  const catched = isCatched(id);
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

function isCatched(id) {
  const catched = JSON.parse(
    fs.readFileSync(process.cwd() + "/routes/JSON-data/catchedIds.json")
  );
  return catched.includes(id);
}

function catchPokemon(pokemonObj) {
  const catchedIds = JSON.parse(
    fs.readFileSync(process.cwd() + "/routes/JSON-data/catchedIds.json")
  );
  catchedIds.push(pokemonObj.id);
  return true;
}
module.exports = pokemon;
