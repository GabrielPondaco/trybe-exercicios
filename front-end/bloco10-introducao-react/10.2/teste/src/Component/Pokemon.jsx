import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  // const { name, type, averageWeigth: { value, measurementUnit }, image } = this.props.pokemon;
  render() {
    const { pokemon:
      { name, type, averageWeight:
        { value, measurementUnit }, image } } = this.props;
    return (
      <div className="flex">
        <div className="pokemon">
          <h1>{ name }</h1>
          <span>{ type }</span>
          <span>{ `${value} ${measurementUnit}` }</span>
        </div>
        <img className="image" src={ image } alt={ `${name} animated gif` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
