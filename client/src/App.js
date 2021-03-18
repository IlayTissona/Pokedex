import logo from "./logo.svg";
import "./App.css";
import SearchArea from "./components/SearchArea";
import Pokemon from "./components/Pokemon";
import PokemonsList from "./components/PokemonsList";
const arr = ["gil", "ilay"];

function App() {
  return (
    <div className="App">
      <SearchArea />
      <Pokemon name="Gilad" height="1.74" weight="70" types="Gever" />
      <PokemonsList list={arr} />
    </div>
  );
}

export default App;
