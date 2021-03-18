import logo from "./logo.svg";
import "./App.css";
import SearchArea from "./components/SearchArea";
import Pokemon from "./components/Pokemon";
import PokemonsList from "./components/PokemonsList";
import { useEffect, useState } from "react";
import axios from "axios";

const arr = ["gil", "ilay"];

const [pokemon, setPokemon] = useState("");

function App() {
  return (
    <div className="App">
      <div id="searchDiv">
        <h1 id="title">POKEDEX</h1>
        <SearchArea search={search} />
        <Pokemon
          name={pokemon.name}
          height={pokemon.height}
          weight={pokemon.weight}
          types={pokemon.types}
        />
      </div>
      <div id="listDiv">
        {" "}
        <PokemonsList list={arr} />
      </div>
    </div>
  );
}

function search(pokeName) {
  axios
    .get("http:\\localhost:3001/api/pokemon/pikachu")
    .then((newPokemon) => setPokemon(newPokemon));
}

export default App;
