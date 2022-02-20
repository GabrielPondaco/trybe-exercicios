import React, { Component } from 'react'
import data from "./data";
import Pokemon from './Pokemon'
class Pokedex extends Component {
  render() {
    return (
      
      <div className='pokemon-container'>
        {data.map((pokemon, index) => <Pokemon pokemon = { pokemon } key={ index }/>)}
      </div>
    );
  }
}

export default Pokedex
