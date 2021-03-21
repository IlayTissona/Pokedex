import logo from "./logo.svg";
import "./App.css";
import SearchArea from "./components/SearchArea";
import Pokemon from "./components/Pokemon";
import PokemonsList from "./components/PokemonsList";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";

function App() {
  const [list, setList] = useState([]);
  const [pokemon, setPokemon] = useState("landing");
  const [listType, setListType] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [spinner, setSpinner] = useState(true);

  function randomPokemon() {
    spinnerOn();
    axios.get("/api/pokemon/random").then((randomPokemon) => {
      setPokemon(randomPokemon.data);
      spinnerOff();
    });
  }

  function search(pokeName) {
    setSuggestions([]);
    spinnerOn();
    axios
      .get(`/api/pokemon/${pokeName}`)
      .then((newPokemon) => {
        spinnerOff();
        setPokemon(newPokemon.data);
      })
      .catch((e) => {
        setPokemon("Not-Found");
        spinnerOff();
      });
  }

  function typeList(type) {
    spinnerOn();
    setListType(type);
    axios.get(`/api/type/${type}`).then((newList) => {
      setList(newList.data);
      spinnerOff();
    });
  }

  function catchPokemon(name) {
    axios.post(`/api/collection/catch/${name}`).then((newPokemon) => {
      setPokemon(newPokemon.data);
      const newList = list.concat([newPokemon.data]);
      setList(newList);
    });
    collection();
  }

  function releasePokemon(name) {
    axios.delete(`/api/collection/release/${name}`).then((newPokemon) => {
      setPokemon(newPokemon.data);
      const newList = list.filter((poke) => poke.name !== name);
      setList(newList);
    });
    collection();
  }

  function collection() {
    spinnerOn();
    axios.get(`/api/collection`).then((newList) => {
      setList(newList.data);
      spinnerOff();
      setListType("");
    });
  }

  function searchSuggestions(value) {
    if (value.length > 0) {
      axios
        .get(`/api/collection/suggestions/${value}`)
        .then((newSuggestions) => {
          setSuggestions(newSuggestions.data);
        });
    } else {
      setSuggestions([]);
    }
  }

  function spinnerOn() {
    setSpinner(false);
  }

  function spinnerOff() {
    setSpinner(true);
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
        <Spinner on={spinner} />
        <Pokemon
          show={!spinner}
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
          Random
          <br />{" "}
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
