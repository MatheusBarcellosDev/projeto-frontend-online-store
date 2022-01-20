import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from './styled';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // const { products } = this.props;
  }

  handleClick(index) {
    const { products } = this.props;
    console.log(products[index]);
  }

  render() {
    const { products } = this.props;

    return (
      <Container className="card">
        {products.map(({ thumbnail, price, title, id }, i) => (
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
            <Link
              data-testid="product-detail-link"
              to={ `/MoreDetails/${title}` }
              onClick={ () => {
                this.handleClick(i);
              } }
            >
              Mais Detalhe
            </Link>
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
