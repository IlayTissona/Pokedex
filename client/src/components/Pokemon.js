import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <div className="pokemonDetails">
        <ul>
          <li>Name: {pokemon.name}</li>
          <li>Height: {pokemon.height}</li>
          <li>Weight: {pokemon.weight}</li>
          <li>
            Types:{" "}
            {pokemon.types.map((link) => {
              return (
                <button onClick={() => this.props.typeOnClick(link)}>
                  {" "}
                  {link}{" "}
                </button>
              );
            })}
          </li>
        </ul>
        <img alt="front" src={this.props.pokemon.front_default} />
        <img alt="back" src={this.props.pokemon.back_default} />
        <button>catch</button>
      </div>
    );
  }
}

export default Pokemon;
