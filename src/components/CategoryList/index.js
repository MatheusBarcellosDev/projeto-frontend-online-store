import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Container from './styled';

class CategoryList extends Component {
  render() {
    const { categories, onChange: handleChange } = this.props;
    return (
      <Container>
        {categories.map((category) => (
          <div key={ category.id }>
            <label
              htmlFor={ category.id }
              data-testid="category"
            >
              <input
                type="radio"
                id={ category.id }
                name="categoryList"
                onChange={ handleChange }
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
  onChange: Proptypes.func,
}.isRequired;

export default CategoryList;
