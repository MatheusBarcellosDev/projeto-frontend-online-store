import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ProducDetailsCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price } = product;
    const { attributes } = product;
    console.log('attributes', attributes);
    return (
      <div>
        <span data-testid="product-detail-name">{title}</span>
        <div>
          {(attributes !== undefined && attributes.length !== 0)
            && attributes.map((attribute) => (
              <>
                <span
                  key={ attribute.id }
                >
                  {attribute.name}
                </span>
                <span
                  key={ attribute.id }
                >
                  {attribute.value_name}
                </span>
              </>
            ))}
        </div>
        <span>{price}</span>
      </div>
    );
  }
}

ProducDetailsCard.propTypes = {
  product: Proptypes.objectOf(Proptypes.string),
}.isRequired;

export default ProducDetailsCard;
