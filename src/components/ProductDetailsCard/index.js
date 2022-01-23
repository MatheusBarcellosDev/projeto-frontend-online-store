import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Container from './styled';

class ProducDetailsCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, attributes } = product;
    return (
      <Container>
        <div className="productName">
          <h1 data-testid="product-detail-name">{title}</h1>
          <span>{`R$: ${price}`}</span>
        </div>
        <div className="containerProductDetails">
          <div className="imgProduct">
            <img src={ product.thumbnail } alt={ product.title } />
          </div>
          <div>
            {(attributes !== undefined && attributes.length !== 0)
              && attributes.map((attribute) => (
                <div key={ attribute.id }>
                  <span>
                    {`${attribute.name}: ${attribute.value_name} `}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <br />
      </Container>
    );
  }
}

ProducDetailsCard.propTypes = {
  product: Proptypes.objectOf(Proptypes.string),
}.isRequired;

export default ProducDetailsCard;
