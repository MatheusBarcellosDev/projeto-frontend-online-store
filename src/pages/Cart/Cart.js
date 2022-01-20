import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  render() {
    return (
      <>
        <Link to="/">Voltar</Link>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      </>
    );
  }
}

export default Cart;
