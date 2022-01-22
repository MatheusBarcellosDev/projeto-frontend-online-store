import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import { getSavedCartItems } from '../../services/CartItems';

class Cart extends React.Component {
  constructor() {
    super();

    this.getSavedCartItems = this.getSavedCartItems.bind(this);

    this.state = {
      itemsCart: [],
    };
  }

  componentDidMount() {
    this.getSavedCartItems();
  }

  getSavedCartItems() {
    const cartItems = getSavedCartItems();
    this.setState({
      itemsCart: [...cartItems],
    });
  }

  render() {
    const { itemsCart } = this.state;
    console.log(itemsCart);

    return (
      <>
        <Header>
          <Search />
          <Link to="/">Voltar</Link>
        </Header>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        {itemsCart.length !== 0
          && itemsCart.map((item) => (
            <div key={ item.product.id }>
              <span
                data-testid="shopping-cart-product-name"
              >
                {item.product.title}
              </span>
              <br />
              <span
                data-testid="shopping-cart-product-quantity"
              >
                {`Total de produtos no carrinho: ${item.total}`}
              </span>
            </div>
          ))}
      </>
    );
  }
}

export default Cart;
