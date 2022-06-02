import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Container from './styled';

// codigo usado para fazer os Star Radios, foi consultado do video https://www.youtube.com/watch?v=eDw46GYAIDQ

class StarRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: null,
    };
  }

  handleRadioChange() {
    const { radio } = this.state;
    const { inputRadio } = this.props;
    inputRadio(radio);
  }

  render() {
    const numberStar = 5;
    const { radio } = this.state;
    return (
      <Container className="star-radio">
        {[...Array(numberStar)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={ i } htmlFor={ star }>
              <input
                type="radio"
                name="rating"
                value={ ratingValue }
                data-testid={ `${ratingValue}-rating` }
                onClick={
                  () => this.setState({ radio: ratingValue },
                    () => this.handleRadioChange())
                }
              />
              <FaStar
                className="star"
                color={ ratingValue <= radio ? '#ffc107' : '#e4e5e9' }
              />
            </label>

          );
        })}
      </Container>
    );
  }
}

StarRadio.propTypes = {
  inputRadio: PropTypes.func.isRequired,
};

export default StarRadio;
