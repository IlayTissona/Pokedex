import React, { Component } from "react";

function ListItem({ pokemon, clickHandler }) {
  console.log(pokemon.front_default);
  return (
    <li>
      <button
        onClick={() => {
          clickHandler(pokemon.name);
        }}
      >
        {pokemon.name}{" "}
      </button>
      <img alt="front" src={pokemon.front_default} />
    </li>
  );
}

export default ListItem;
