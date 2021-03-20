import logo from "./logo.svg";
import "./App.css";
import SearchArea from "./components/SearchArea";
import Pokemon from "./components/Pokemon";
import PokemonsList from "./components/PokemonsList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);
  const [pokemon, setPokemon] = useState({ types: [] });
  const [listType, setListType] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function randomPokemon() {
    axios
      .get("http://localhost:3001/api/pokemon/random")
      .then((randomPokemon) => {
        setPokemon(randomPokemon.data);
      });
  }

  function search(pokeName) {
    setSuggestions([]);
    axios
      .get(`http://localhost:3001/api/pokemon/${pokeName}`)
      .then((newPokemon) => {
        setPokemon(newPokemon.data);
      });
  }

  function typeList(type) {
    setListType(type);
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

  function searchSuggestions(value) {
    console.log(value);
    if (value.length > 0) {
      axios
        .get(`http://localhost:3001/api/collection/suggestions/${value}`)
        .then((newSuggestions) => {
          setSuggestions(newSuggestions.data);
        });
    } else {
      setSuggestions([]);
    }
  }

  return (
    <div className="App">
      <div id="searchDiv">
        <h1 id="title">POKEDEX</h1>
        <SearchArea
          search={search}
          searchSuggestions={searchSuggestions}
          suggestions={suggestions}
        />

        <Pokemon
          catchPokemon={catchPokemon}
          pokemon={pokemon}
          typeOnClick={typeList}
          releasePokemon={releasePokemon}
        />
      </div>
      <div id="center">
        <button id="collection" onClick={collection}>
          My Collection
        </button>

        <button id="randomPokemon" onClick={randomPokemon}>
          {" "}
          click <br /> here{" "}
        </button>
      </div>

      <div id="listDiv">
        {" "}
        <PokemonsList clickHandler={search} list={list} listType={listType} />
      </div>
    </div>
  );
}

export default App;
