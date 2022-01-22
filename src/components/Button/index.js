import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { addProduct } from '../../services/CartItems';

class Button extends Component {
  constructor() {
    super();
    this.handleClickAddCart = this.handleClickAddCart.bind(this);
  }

  handleClickAddCart(product, event) {
    addProduct(product);
    console.log(event.target);
  }

  render() {
    const { product, dataTestid } = this.props;
    return (
      <section>
        <button
          type="button"
          data-testid={ dataTestid }
          onClick={ (event) => this.handleClickAddCart(product, event) }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

Button.propTypes = {
  product: Proptypes.objectOf(Proptypes.string),
}.isRequired;

export default Button;
