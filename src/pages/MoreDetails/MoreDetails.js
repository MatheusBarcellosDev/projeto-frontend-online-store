import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import getProductsFromId from '../../services/productId';
import ProducDetailsCard from '../../components/ProductDetailsCard';


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
    const productData = await getProductsFromId(id);
    this.setState({ productData: { ...productData } });
  }

  render() {
    const { productData } = this.state;
    console.log(productData);
    return (
      <>

        <Header>
          <Link to="/">Voltar</Link>
        </Header>
        <h1 data-testid="product-detail-name">{title}</h1>

        <ProducDetailsCard product={ productData } />
        <Link to="/">Voltar</Link>

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
