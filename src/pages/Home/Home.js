import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from './styled';
import * as api from '../../services/api';
import CategoryList from '../../component/CategoryList';

class Home extends Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const categories = await api.getCategories();
    this.setState({ categories: [...categories] });
  }

  render() {
    const { categories } = this.state;
    return (
      <Container>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <div>
          <CategoryList categories={ categories } />
        </div>
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
