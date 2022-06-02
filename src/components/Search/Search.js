import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import Container from './styled';

class Search extends Component {
  render() {
    const { searchInput, handleSearch, handleClick } = this.props;
    return (
      <Container>
        <form>
          <div className="input-group">
            <input
              data-testid="query-input"
              id="input-search"
              type="text"
              value={ searchInput }
              onChange={ handleSearch }
            />

            <button
              data-testid="query-button"
              type="submit"
              onClick={ handleClick }
            >
              <BiSearch />
            </button>

          </div>

        </form>
      </Container>
    );
  }
}

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Search;
