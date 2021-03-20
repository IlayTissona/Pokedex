import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pokemon = this.props.pokemon;
    if (pokemon === "landing") {
      return (
        <div className="pokemonDetails landing">
          Welcome to our Pokedex!
          <br />
          You can start by searching or clicking on the random button.
        </div>
      );
    }
    if (!pokemon.types) {
      return (
        <div className="pokemonDetails Error">
          <ul>
            <li>Error : Not Found</li>
            <li>Code : 404</li>
            <li>Try : Search or click for random pokemon! </li>
          </ul>
        </div>
      );
    }
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
                <button
                  className="typeButton"
                  onClick={() => this.props.typeOnClick(link)}
                >
                  {" "}
                  {link}{" "}
                </button>
              );
            })}
          </li>
        </ul>
        <img alt="front" src={pokemon.front_default} />
        <img alt="back" src={pokemon.back_default} />
        <button
          className={pokemon.catched ? "catched" : ""}
          id="catchButton"
          onClick={
            pokemon.catched
              ? () => this.props.releasePokemon(pokemon.name)
              : () => this.props.catchPokemon(pokemon.name)
          }
        >
          <span
            class="iconify"
            data-icon="mdi-pokeball"
            data-inline="false"
          ></span>
        </button>
      </div>
    );
  }
}

export default Pokemon;
