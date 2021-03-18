import logo from "./logo.svg";
import "./App.css";
import SearchArea from "./components/SearchArea";
import Pokemon from "./components/Pokemon";
import PokemonsList from "./components/PokemonsList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState({ types: [] });
  const [list, setList] = useState([]);
  function search(pokeName) {
    axios
      .get(`http://localhost:3001/api/pokemon/${pokeName}`)
      .then((newPokemon) => {
        setPokemon(newPokemon.data);
      });
  }

  function typeList(type) {
    axios.get(`http://localhost:3001/api/type/${type}`).then((newList) => {
      setList(newList.data);
    });
  }

  return (
    <div className="App">
      <div id="searchDiv">
        <h1 id="title">POKEDEX</h1>
        <SearchArea search={search} />
        <Pokemon pokemon={pokemon} typeOnClick={typeList} />
      </div>
      <div id="listDiv">
        {" "}
        <PokemonsList clickHandler={search} list={list} />
      </div>
    </div>
  );
}

export default App;
