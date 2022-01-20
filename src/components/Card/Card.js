import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './styled';

class Card extends Component {
  render() {
    const { products } = this.props;

    return (
      <Container className="card">
        {products.map(({ thumbnail, price, title, id }) => (
          <section key={ id } data-testid="product">
            <div className="card-image">
              <img src={ thumbnail } alt={ title } />
            </div>
            <div className="card-title">
              <p>{title}</p>
            </div>
            <div className="card-price">
              <p>{`R$ ${price}`}</p>
            </div>
          </section>
        ))}
      </Container>
    );
  }
}

Card.propTypes = {
  products: PropTypes.arrayOf,
}.isRequired;

export default Card;
