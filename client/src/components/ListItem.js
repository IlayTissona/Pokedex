import React, { Component } from "react";

function ListItem({ pokemon, clickHandler }) {
  console.log(pokemon.front_default);
  return (
    <li className="typeListItem">
      <button
        onClick={() => {
          clickHandler(pokemon.name);
        }}
      >
        {pokemon.name}{" "}
      </button>
      <img alt="front" id="listItemImg" src={pokemon.front_default} />
    </li>
  );
}

export default ListItem;
