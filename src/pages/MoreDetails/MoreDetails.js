import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MoreDetails extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    const { match: { params: { title } } } = this.props;
    this.setState({ title });
  }

  render() {
    const { title } = this.state;
    return (
      <>
        <h1 data-testid="product-detail-name">{title}</h1>
        <Link to="/">Voltar</Link>
      </>
    );
  }
}

MoreDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MoreDetails;
