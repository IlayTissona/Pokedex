import React, { Component } from "react";
import ListItem from "./ListItem";

class PokemonsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeArr: props.list,
    };
  }
  render() {
    return (
      <div>
        <h2>Type</h2>
        <ul>
          {this.state.typeArr.map((pokemon) => {
            return <ListItem pokemon={pokemon} />;
          })}
        </ul>
      </div>
    );
  }
}

export default PokemonsList;
