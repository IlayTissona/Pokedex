const { Router } = require("express");
const axios = require("axios");
const { getExisting } = require("../utils/pokeAPI");

const types = [
  {
    name: "normal",
    url: "https://pokeapi.co/api/v2/type/1/",
  },
  {
    name: "fighting",
    url: "https://pokeapi.co/api/v2/type/2/",
  },
  {
    name: "flying",
    url: "https://pokeapi.co/api/v2/type/3/",
  },
  {
    name: "poison",
    url: "https://pokeapi.co/api/v2/type/4/",
  },
  {
    name: "ground",
    url: "https://pokeapi.co/api/v2/type/5/",
  },
  {
    name: "rock",
    url: "https://pokeapi.co/api/v2/type/6/",
  },
  {
    name: "bug",
    url: "https://pokeapi.co/api/v2/type/7/",
  },
  {
    name: "ghost",
    url: "https://pokeapi.co/api/v2/type/8/",
  },
  {
    name: "steel",
    url: "https://pokeapi.co/api/v2/type/9/",
  },
  {
    name: "fire",
    url: "https://pokeapi.co/api/v2/type/10/",
  },
  {
    name: "water",
    url: "https://pokeapi.co/api/v2/type/11/",
  },
  {
    name: "grass",
    url: "https://pokeapi.co/api/v2/type/12/",
  },
  {
    name: "electric",
    url: "https://pokeapi.co/api/v2/type/13/",
  },
  {
    name: "psychic",
    url: "https://pokeapi.co/api/v2/type/14/",
  },
  {
    name: "ice",
    url: "https://pokeapi.co/api/v2/type/15/",
  },
  {
    name: "dragon",
    url: "https://pokeapi.co/api/v2/type/16/",
  },
  {
    name: "dark",
    url: "https://pokeapi.co/api/v2/type/17/",
  },
  {
    name: "fairy",
    url: "https://pokeapi.co/api/v2/type/18/",
  },
  {
    name: "unknown",
    url: "https://pokeapi.co/api/v2/type/10001/",
  },
  {
    name: "shadow",
    url: "https://pokeapi.co/api/v2/type/10002/",
  },
];

const type = Router();

type.get("/:typeName", async (req, res) => {
  const { typeName } = req.params;
  const typeObj = types.find((type) => type.name === typeName);
  if (!typeObj) return res.sendStatus(404);
  const fullTypeDetails = await axios.get(typeObj.url);
  console.log(fullTypeDetails.data.pokemon);
  const pokemonNames = fullTypeDetails.data.pokemon.map(
    (prop) =>
      getExisting(prop.pokemon.name) || {
        name: prop.pokemon.name,
        front_default:
          "https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png",
      }
  );
  res.json(pokemonNames);
});

module.exports = type;
