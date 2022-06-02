import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { getSavedCartItems } from '../../services/CartItems';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [],
    };

    this.getSavedCartItems = this.getSavedCartItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getSavedCartItems();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  getSavedCartItems() {
    const products = getSavedCartItems();
    // this.setState = ({ Items: [...products] }); <<<<------ retirar essa linha!
    this.setState({
      Items: [...products],
    });
  }

  render() {
    const { Items } = this.state;
    // console.log(Items, 'Items') <<<<<<<<<<<<---- retirar essa linha

    let result = 0;

    Items.forEach((item) => {
      result += item.product.price * item.quantity;
    });
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
          <br />
          <span>{ `Total: ${result}` }</span>
        </div>

        <div>

          <form>
            <label htmlFor="fullName">
              Nome Completo
              <input
                type="text"
                id="fullName"
                name="fullName"
                data-testid="checkout-fullname"
                onChange={ this.handleChange }
              />
            </label>

            <label htmlFor="email">
              E-mail
              <input
                type="email"
                id="email"
                name="email"
                data-testid="checkout-email"
                onChange={ this.handleChange }
              />
            </label>

            <label htmlFor="cpf">
              CPF
              <input
                type="text"
                id="cpf"
                name="cpf"
                data-testid="checkout-cpf"
                onChange={ this.handleChange }
              />
            </label>

            <label htmlFor="telefone">
              Telefone
              <input
                type="tel"
                id="telefone"
                name="telefone"
                data-testid="checkout-phone"
                onChange={ this.handleChange }
              />
            </label>

            <label htmlFor="cep">
              CEP
              <input
                type="text"
                id="cep"
                name="cep"
                data-testid="checkout-cep"
                onChange={ this.handleChange }
              />
            </label>

            <label htmlFor="address">
              Endereço
              <input
                type="text"
                id="address"
                name="address"
                data-testid="checkout-address"
                onChange={ this.handleChange }
              />
            </label>
            <br />
            <hr />

            <span> Formas de Pagamento</span>

            <label htmlFor="boleto">
              <input
                type="radio"
                id="boleto"
                name="payment"
                onChange={ this.handleChange }
              />
              Boleto
            </label>

            <label htmlFor="visa">
              <input
                type="radio"
                id="visa"
                name="payment"
                onChange={ this.handleChange }
              />
              Visa
            </label>

            <label htmlFor="master">
              <input
                type="radio"
                id="master"
                name="payment"
                onChange={ this.handleChange }
              />
              Master
            </label>

            <label htmlFor="elo">
              <input
                type="radio"
                id="elo"
                name="payment"
                onChange={ this.handleChange }
              />
              Elo
            </label>
          </form>
        </div>
      </>
    );
  }
}

export default Checkout;
