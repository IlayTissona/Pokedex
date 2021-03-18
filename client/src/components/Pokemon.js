import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      height: props.height,
      weight: props.weight,
      types: props.types,
    };
  }
  render() {
    return (
      <div className="pokemonDetails">
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Height: {this.state.height}</li>
          <li>Weight: {this.state.weight}</li>
          <li>Types: {this.state.types}</li>
        </ul>
        {/* <img src={this.state.front_default}></img> */}
        {/* <img src={this.state.back_default}></img> */}
        <button>catch</button>
      </div>
    );
  }
}

export default Pokemon;
