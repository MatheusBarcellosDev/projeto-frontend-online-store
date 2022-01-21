import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

class Cart extends React.Component {
  render() {
    return (
      <>
        <Header>
          <Search />
          <Link to="/">Voltar</Link>
        </Header>

        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      </>
    );
  }
}

export default Cart;
