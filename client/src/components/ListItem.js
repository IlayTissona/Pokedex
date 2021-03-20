import React, { Component } from "react";

function ListItem({ pokemon, clickHandler }) {
  return (
    <li className="typeListItem">
      <button
        onClick={() => {
          clickHandler(pokemon.name);
        }}
      >
        {pokemon.name}{" "}
      </button>
      <br />
      <img alt="front" id="listItemImg" src={pokemon.front_default} />
    </li>
  );
}

export default ListItem;
