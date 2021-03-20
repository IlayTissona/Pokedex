import React, { useState } from "react";
import Suggestion from "./Suggestion";

function SearchArea(props) {
  const [value, setValue] = useState("");

  return (
    <div className="searchArea">
      <input
        onChange={(e) => {
          setValue(e.target.value);
          props.searchSuggestions(e.target.value);
        }}
        placeholder="Search for Pokemons"
      />
      <button
        onClick={() => {
          props.search(value);
        }}
      >
        Search
      </button>
      <Suggestion clickHandler={props.search} pokemons={props.suggestions} />
    </div>
  );
}

export default SearchArea;
