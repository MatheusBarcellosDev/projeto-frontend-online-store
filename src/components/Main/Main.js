import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Container from './styled';

class Main extends Component {
  render() {
    const { children } = this.props;
    return (
      <Container>
        {children}
      </Container>
    );
  }
}

Main.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Main;
