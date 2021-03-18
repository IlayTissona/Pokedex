import React, { Component } from "react";

function ListItem({ pokemon, clickHandler }) {
  return (
    <li>
      <button
        onClick={() => {
          clickHandler(pokemon);
        }}
      >
        {pokemon}{" "}
      </button>
    </li>
  );
}

export default ListItem;
