import logo from "./logo.svg";
import "./App.css";
import SearchArea from "./components/SearchArea";
import Pokemon from "./components/Pokemon";
import PokemonsList from "./components/PokemonsList";
import { useEffect } from "react";
import axios from "axios";

const arr = ["gil", "ilay"];

function App() {
  return (
    <div className="App">
      <div id="searchDiv">
        <h1 id="title">POKEDEX</h1>
        <SearchArea />
        <Pokemon name="Gilad" height="1.74" weight="70" types="Gever" />
      </div>
      <div id="listDiv">
        {" "}
        <PokemonsList list={arr} />
      </div>
    </div>
  );
}

function search(pokeName) {
  axios.get("");
}

export default App;
