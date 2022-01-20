import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './styled';

class Card extends Component {
  render() {
    const { image, title, price } = this.props;

    return (
      <Container className="card">
        <div className="card-image">
          <img src={ image } alt={ title } />
        </div>
        <div className="card-title">
          <p>{ title }</p>
        </div>
        <div className="card-price">
          <p>{`R$ ${price}`}</p>
        </div>
      </Container>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
