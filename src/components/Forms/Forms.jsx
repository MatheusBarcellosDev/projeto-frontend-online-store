import React, { Component } from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import Proptypes from 'prop-types';
import StarRadio from '../StarRadio/StarRadio';
import Container from './styled';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      textarea: '',
      radio: null,
      avaliations: [],
    };

    this.setInputRadio = this.setInputRadio.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveStateInLocalStorage = this.saveStateInLocalStorage.bind(this);
    this.setAvaliations = this.setAvaliations.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  setInputRadio(radio) {
    this.setState({ radio });
  }

  getLocalStorage() {
    const state = localStorage.getItem('form-state');
    const newState = JSON.parse(state);
    if (newState) {
      this.setState({ avaliations: newState });
    }
    return null;
  }

  setAvaliations() {
    const { email, textarea, radio } = this.state;
    const { product } = this.props;
    const { avaliations } = this.state;
    const avaliation = {
      email,
      textarea,
      radio,
      id: product,
    };
    this.setState({ avaliations: [...avaliations, avaliation] },
      this.saveStateInLocalStorage);
  }

  saveStateInLocalStorage() {
    const { avaliations } = this.state;
    localStorage.setItem('form-state', JSON.stringify(avaliations));
    this.setState({ email: '', textarea: '', radio: null });
    window.location.reload();
  }

  render() {
    const { avaliations } = this.state;
    /*  const { product } = this.props; */
    return (
      <Container>
        <form className="form-group">
          <h2>Avaliação</h2>
          <label className="containerEmailAndStar" htmlFor="exampleFormControlInput1">
            <input
              type="email"
              data-testid="product-detail-email"
              id="inputEmail1"
              placeholder="Email"
              name="email"
              onChange={ this.handleChange }
            />
            <StarRadio
              inputRadio={ this.setInputRadio }
            />
          </label>
          <label htmlFor="TextArea">
            <textarea
              type="text"
              data-testid="product-detail-evaluation"
              id="msg"
              name="textarea"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            className="btnAvaliation"
            data-testid="submit-review-btn"
            onClick={ this.setAvaliations }
          >
            Avaliar

          </button>
        </form>
        <div>
          <div>
            {/* Usando uma renderizacao condicional, para renderizar somente as avaliacoes
            do produto que está na pagina, o teste nao passa */}

            {/* avaliations.find((avaliation) => avaliation.id === product) ? (
              avaliations.filter((avaliation) => avaliation.id === product) */
              avaliations.map((avaliation) => (
                <div className="containerAvaliation" key={ avaliation.id }>
                  <p className="user">
                    {' '}
                    <FaUserCircle className="userIcon" />
                    { avaliation.email }
                  </p>
                  <p>{ avaliation.textarea }</p>
                  <div className="starIcon">
                    {[...Array(avaliation.radio)].map((i) => (
                      <FaStar
                        key={ i }
                        className="star"
                        color="#ffc107"
                      />
                    ))}
                  </div>
                </div>
              ))
            /* ) : (<h3>Ainda nao há avaliações disponível </h3>) */}
          </div>
        </div>

      </Container>
    );
  }
}

Forms.propTypes = {
  product: Proptypes.string.isRequired,
}.isRequired;

export default Forms;
