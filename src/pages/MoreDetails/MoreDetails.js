import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import getProductFromId from '../../services/productId';
import ProducDetailsCard from '../../components/ProductDetailsCard';
import Button from '../../components/Button';
import Forms from '../../components/Forms/Forms';

class MoreDetails extends Component {
  constructor() {
    super();
    this.state = {
      productData: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;
    const productData = await getProductFromId(id);
    this.setState({ productData: { ...productData } });
  }

  render() {
    const { productData } = this.state;
    return (
      <>

        <Header>
          <Link data-testid="shopping-cart-button" to="/cart">
            Carrinho
          </Link>
          <Link to="/">Voltar</Link>
        </Header>
        <ProducDetailsCard
          product={ productData }
        >
          <Button product={ productData } dataTestid="product-detail-add-to-cart" />
          <Forms product={ productData.id } />
        </ProducDetailsCard>
      </>
    );
  }
}

MoreDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MoreDetails;
