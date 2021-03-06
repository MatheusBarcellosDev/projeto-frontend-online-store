import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from './styled';
import * as api from '../../services/api';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import CategoryList from '../../components/CategoryList';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Card from '../../components/Card/Card';

class Home extends Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);
    this.getItemsCategories = this.getItemsCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      categories: [],
      products: [],
      search: '',
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  handleSearch = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };

  handleChange({ target }) {
    const { id, value } = target;
    this.getItemsCategories(id, value);
  }

  async getCategories() {
    const categories = await api.getCategories();
    this.setState({ categories: [...categories] });
  }

  async getItemsCategories(categoryid, query) {
    const response = await api.getProductsFromCategoryAndQuery(categoryid, query);
    const { results } = response;

    this.setState({ products: [...results] });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { search } = this.state;
    getProductsFromCategoryAndQuery(null, search).then((products) => {
      this.setState({ products: products.results });
    });
  };

  render() {
    const { categories, search, products } = this.state;
    return (
      <Container>
        <Header>
          <Search
            searchInput={ search }
            handleSearch={ this.handleSearch }
            handleClick={ this.handleClick }
          />
          <Link data-testid="shopping-cart-button" to="/cart">
            Carrinho
          </Link>
        </Header>
        <Main>
          <CategoryList categories={ categories } onChange={ this.handleChange } />
          <div className="list-product">
            <Card products={ products } />
            <span data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
          </div>
        </Main>
      </Container>
    );
  }
}

export default Home;
