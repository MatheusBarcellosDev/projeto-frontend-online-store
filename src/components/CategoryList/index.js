import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Container from './styled';

class CategoryList extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Container>
        {categories.map((category) => (
          <div key={ category.id }>
            <label
              htmlFor={ category.name }
              data-testid="category"
            >
              <input
                type="radio"
                id={ category.name }
                name="categoryList"
              />
              {category.name}
            </label>
          </div>
        ))}
      </Container>
    );
  }
}

CategoryList.propTypes = {
  categories: Proptypes.arrayOf(Proptypes.objectOf),
}.isRequired;

export default CategoryList;
