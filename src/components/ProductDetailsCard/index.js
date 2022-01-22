import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ProducDetailsCard extends Component {
  render() {
    const { product, testIdName } = this.props;
    const { title, price, attributes } = product;
    return (
      <div>
        <span data-testid="product-detail-name">{`Titulo do produto: ${title}`}</span>
        <div>
          <br />
          <div>
            {(attributes !== undefined && attributes.length !== 0)
              && attributes.map((attribute) => (
                <div key={ attribute.id }>
                  <span data-testid={ testIdName }>
                    {`${attribute.name}: ${attribute.value_name} `}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <br />
        <span>{`Preço: ${price}`}</span>
      </div>
    );
  }
}

ProducDetailsCard.propTypes = {
  product: Proptypes.objectOf(Proptypes.string),
}.isRequired;

export default ProducDetailsCard;
