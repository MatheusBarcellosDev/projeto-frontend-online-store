import React, { Component } from 'react';
import Container from './styled';

class Home extends Component {
  render() {
    return (
      <Container>
        <div className="container-content">
          <span
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          <form>
            <label htmlFor="input-search">
              <input
                id="input-search"
                type="text"
              />
            </label>
          </form>
        </div>

      </Container>
    );
  }
}

export default Home;
