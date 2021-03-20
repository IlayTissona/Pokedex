import React from "react";

function Suggestion({ pokemons, clickHandler }) {
  return (
    <select
      id="searchSuggestions"
      onChange={(e) => clickHandler(e.target.value)}
    >
      {" "}
      {pokemons.map((pokemon) => {
        return <option value={pokemon}>{pokemon}</option>;
      })}{" "}
    </select>
  );
}
export default Suggestion;
