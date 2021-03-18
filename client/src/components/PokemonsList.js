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
      <div id="ulDiv">
        <h2>Type</h2>
        <ul id="typeList">
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
