import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {
  getSavedCartItems,
  removeItem,
  updateCartQuantity } from '../../services/CartItems';
import Container from './styled';

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

  removeItemCard(id) {
    removeItem(id);
    const { itemsCart } = this.state;
    const newItemsCart = itemsCart.filter((item) => item.product.id !== id);
    this.setState({
      itemsCart: [...newItemsCart],
    });
  }

  sumQuantity(id) {
    const { itemsCart } = this.state;
    const product = itemsCart.find((item) => item.product.id === id);
    product.quantity += 1;
    this.setState({
      itemsCart: [...itemsCart],
    }, updateCartQuantity(id, product.quantity));
  }

  subQuantity(id) {
    const { itemsCart } = this.state;
    const product = itemsCart.find((item) => item.product.id === id);
    if (product.quantity === 1) {
      this.removeItemCard(id);
      return;
    }
    product.quantity -= 1;
    this.setState({
      itemsCart: [...itemsCart],
    }, updateCartQuantity(id, product.quantity));
  }

  render() {
    const { itemsCart } = this.state;
    console.log(itemsCart);

    return (
      <Container>
        <Header>
          <Search />
          <Link to="/">Voltar</Link>
        </Header>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        {itemsCart.length !== 0
          && itemsCart.map((item) => (
            <div className="cardProduct" key={ item.product.id }>
              <button
                onClick={ () => this.removeItemCard(item.product.id) }
                type="button"
                className="cardButtonDelete"
              >
                x
              </button>
              <img
                className="cardProduct__image"
                src={ item.product.thumbnail }
                alt={ item.product.title }
              />
              <span
                className="cardProductTitle"
                data-testid="shopping-cart-product-name"
              >
                {item.product.title}
              </span>
              <div className="containerQuantity">
                <button
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.subQuantity(item.product.id) }
                  className="cardProductButton"
                  type="button"
                >
                  -
                </button>
                <span
                  className="cardProductQuantity"
                  data-testid="shopping-cart-product-quantity"
                >
                  {`${item.quantity}`}
                </span>
                <button
                  data-testid="product-increase-quantity"
                  onClick={ () => this.sumQuantity(item.product.id) }
                  className="cardProductButton"
                  type="button"
                >
                  +
                </button>
              </div>
              <span
                className="cardProductPrice"
              >
                {`R$ ${item.product.price * item.quantity}`}
              </span>

            </div>
          ))}
      </Container>
    );
  }
}

export default Cart;
