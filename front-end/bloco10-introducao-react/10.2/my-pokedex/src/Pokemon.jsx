import React, { Component } from "react";
import PropTypes from 'prop-types'

class Pokemon extends Component {
  render() {
    console.log('LALALALALAL');
    const {name, type, image, averageWeight: { value, measurementUnit }} = this.props.pokemon;
    return (
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <img src={image} alt="" />
        <p>{value} {measurementUnit}</p>
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
