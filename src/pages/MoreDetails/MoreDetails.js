import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getProductsFromId from '../../services/productId';

class MoreDetails extends Component {
  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;
    console.log('id', id);
    const productId = await getProductsFromId(id);
    console.log(productId);
  }

  render() {
    return (
      <>
        <h1 data-testid="product-detail-name">detalhes</h1>
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
