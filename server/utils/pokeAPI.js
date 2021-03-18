const fs = require("fs");

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
};

const setExisting = function (pokemonObj) {
  fs.writeFileSync(
    `${process.cwd()}/routes/JSON-data/recieved/${pokemonObj.name}.json`,
    JSON.stringify(pokemonObj)
  );
  return pokemonObj;
};

const getAllExisting = function () {
  const existingFiles = fs.readdirSync(
    `${process.cwd()}/routes/JSON-data/recieved`
  );
  return (allPokemons = existingFiles.map((fileName) => {
    return JSON.parse(
      fs.readFileSync(`${process.cwd()}/routes/JSON-data/recieved/${fileName}`)
    );
  }));
};

module.exports = {
  setExisting,
  getExisting,
  generateResponsePokemon,
  getAllExisting,
};
