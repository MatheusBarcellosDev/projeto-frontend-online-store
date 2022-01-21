import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './styled';

class Header extends Component {
  render() {
    const { children } = this.props;
    return (
      <Container className="header">
        <h1 className="title">Online Store</h1>
        { children }
      </Container>

    );
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
