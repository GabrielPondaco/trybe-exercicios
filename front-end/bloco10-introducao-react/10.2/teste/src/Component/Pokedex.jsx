import React, { Component } from 'react';
import Pokemon from './Pokemon';
import data from '../data';

class Pokedex extends Component {
  render() {
    return (
      <div className="pokemon-container">
        {data.map((poke) => <Pokemon pokemon={ poke } key={ poke.id } />)}
      </div>

    );
  }
}

export default Pokedex;
