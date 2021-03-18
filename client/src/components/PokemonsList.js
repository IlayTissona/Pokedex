import React, { Component } from "react";
import ListItem from "./ListItem";

class PokemonsList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   typeArr: props.list,
    // };
  }
  render() {
    return (
      <div>
        <h2>Type</h2>
        <ul>
          {this.props.list.map((pokemon) => {
            return (
              <ListItem
                clickHandler={this.props.clickHandler}
                pokemon={pokemon}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PokemonsList;
