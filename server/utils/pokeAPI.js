const fs = require("fs");
const Pokemon = require("../mongo");

//----------------------------------------------Functions-------------------------------------------------//

const generateResponsePokemon = function (fullObj) {
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
};

const getExisting = function (pokemonName) {
  return Pokemon.findOne({ name: pokemonName }).then((result) =>
    result
      ? result
      : {
          name: pokemonName,
          front_default:
            "https://www.kindpng.com/picc/m/74-743336_global-link-question-question-mark-unknown-pokemon-hd.png",
          knwon: false,
        }
  );
};

const setExisting = function (pokemonObj) {
  const pokemon = new Pokemon(pokemonObj);
  pokemon.save().then((e) => e);
  return pokemon;
};

const getAllExisting = function () {
  return Pokemon.find({}).then((allPokemons) => allPokemons);
};

module.exports = {
  setExisting,
  getExisting,
  generateResponsePokemon,
  getAllExisting,
};
