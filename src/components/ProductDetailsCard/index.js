import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Container from './styled';

class ProducDetailsCard extends Component {
  render() {
    const { product, children } = this.props;
    const { title, price, attributes } = product;
    return (
      <Container>
        <div className="conteinerContent">
          <div className="product">
            <div className="imgProduct">
              <img src={ product.thumbnail } alt={ product.title } />
            </div>
            <h1 data-testid="product-detail-name">{title}</h1>
            <span>{`R$: ${price}`}</span>
            {children}
          </div>
          <div className="containerProductDetails">
            <h2>Especificação Técnicas</h2>
            <div className="containerDetailsItem">
              {(attributes !== undefined && attributes.length !== 0)
              && attributes.map((attribute) => (
                <div className="detailsItem" key={ attribute.id }>
                  <span>
                    {`${attribute.name}: ${attribute.value_name} `}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

ProducDetailsCard.propTypes = {
  product: Proptypes.objectOf(Proptypes.string),
}.isRequired;

export default ProducDetailsCard;
