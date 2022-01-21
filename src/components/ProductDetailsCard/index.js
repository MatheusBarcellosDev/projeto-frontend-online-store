import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ProducDetailsCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <p>{ product.title }</p>
    );
  }
}

ProducDetailsCard.propTypes = {
  product: Proptypes.objectOf(Proptypes.string),
}.isRequired;

export default ProducDetailsCard;
