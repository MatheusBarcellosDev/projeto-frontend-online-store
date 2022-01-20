import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { searchInput, handleSearch, handleClick } = this.props;
    return (
      <form>
        <label htmlFor="input-search">
          <input
            data-testid="query-input"
            id="input-search"
            type="text"
            value={ searchInput }
            onChange={ handleSearch }
          />
        </label>
        <button
          data-testid="query-button"
          type="submit"
          onClick={ handleClick }
        >
          Pesquisar

        </button>
      </form>
    );
  }
}

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Search;
