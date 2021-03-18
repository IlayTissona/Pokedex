import logo from "./logo.svg";
import "./App.css";
import SearchArea from "./components/SearchArea";
import Pokemon from "./components/Pokemon";
import PokemonsList from "./components/PokemonsList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState({ types: [] });
  // const defaultPokemon = axios
  //   .get("http://localhost:3001/api/pokemon/random")
  //   .then((randomPokemon) => {
  //     return randomPokemon;
  //   });
  // setPokemon(defaultPokemon.data);

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

  function catchPokemon(name) {
    axios
      .post(`http://localhost:3001/api/collection/catch/${name}`)
      .then((newPokemon) => {
        console.log(newPokemon);
        setPokemon(newPokemon.data);
      });
  }

  function releasePokemon(name) {
    axios
      .delete(`http://localhost:3001/api/collection/release/${name}`)
      .then((newPokemon) => {
        console.log(newPokemon);
        setPokemon(newPokemon.data);
      });
  }

  function collection() {
    axios
      .get(`http://localhost:3001/api/collection`)
      .then((newList) => setList(newList.data));
  }

  return (
    <div className="App">
      <div id="searchDiv">
        <h1 id="title">POKEDEX</h1>
        <SearchArea search={search} />
        <Pokemon
          catchPokemon={catchPokemon}
          pokemon={pokemon}
          typeOnClick={typeList}
          releasePokemon={releasePokemon}
        />
        <button id="collection" onClick={collection}>
          My Collection
        </button>
      </div>
      <div id="listDiv">
        {" "}
        <PokemonsList clickHandler={search} list={list} />
      </div>
    </div>
  );
}

export default App;
