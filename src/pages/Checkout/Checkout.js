import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { getSavedCartItems } from '../../services/CartItems';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { Items: [] };

    this.getSavedCartItems = this.getSavedCartItems.bind(this);
  }

  componentDidMount() {
    this.getSavedCartItems();
  }

  getSavedCartItems() {
    const products = getSavedCartItems();
    // this.setState = ({ Items: [...products] }); <<<<------ essa linha!
    this.setState({
      Items: [...products],
    });
  }

  // hendleChange(event) {         <<<<<<<<<<<<<<<<<<,----------- PAREI AQUI! 
  //   const { name, value } = event.target;

  // }

  render() {
    const { Items } = this.state;
    return (
      <>
        <Header />
        <div>
          {Items.length !== 0
          && Items.map((item) => (
            <div className="cardProduct" key={ item.product.id }>
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
                <span
                  className="cardProductQuantity"
                  data-testid="shopping-cart-product-quantity"
                >
                  {`${item.quantity}`}
                </span>
              </div>
              <span
                className="cardProductPrice"
              >
                {`R$ ${item.product.price * item.quantity}`}
              </span>
            </div>
          ))}
        </div>

        <form>
          <label data-testid="checkout-fullname" htmlFor="fullName">
            Nome Completo
            <input
              type="text"
              id="fullName"
              value="fullName"
              name="fullName"
              onChange={ this.handleChange }
            />
          </label>

          <label data-testid="checkout-email" htmlFor="email">
            E-mail
            <input
              type="email"
              id="email"
              value="email"
              name="email"
              onChange={ this.handleChange }
            />
          </label>

          <label data-testid="checkout-cpf" htmlFor="cpf">
            CPF
            <input
              type="text"
              id="cpf"
              value="cpf"
              name="cpf"
              onChange={ this.handleChange }
            />
          </label>

          <label data-testid="checkout-phone" htmlFor="telefone">
            Telefone
            <input
              type="tel"
              id="telefone"
              value="telefone"
              name="telefone"
              onChange={ this.handleChange }
            />
          </label>

          <label data-testid="checkout-cep" htmlFor="cep">
            CEP
            <input
              type="text"
              id="cep"
              value="cep"
              name="cpe"
              onChange={ this.handleChange }
            />
          </label>

          <label data-testid="checkout-address" htmlFor="address">
            Endereço
            <input
              type="text"
              id="address"
              value="address"
              name="address"
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </>
    );
  }
}

export default Checkout;
