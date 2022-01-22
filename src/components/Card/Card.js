import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from './styled';
import Button from '../Button';

class Card extends Component {
  render() {
    const { products } = this.props;

    return (
      <Container className="card">
        {products.map((product) => (
          <section className="card" key={ product.id } data-testid="product">
            <div className="card-image">
              <img src={ product.thumbnail } alt={ product.title } />
            </div>
            <div className="card-title">
              <p>{product.title}</p>
            </div>
            <div className="card-price">
              <p>{`R$ ${product.price}`}</p>
            </div>
            <Link
              data-testid="product-detail-link"
              to={ `/MoreDetails/${product.id}` }
            >
              Mais Detalhe
            </Link>
            <Button product={ product } dataTestid="product-add-to-cart" />
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
