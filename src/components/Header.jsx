import React from 'react';
import { Router, Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div data-testid="header-component">
        <h2>Barra de navegação p outras páginas.</h2>
        <Router>
          <Link to="/album">Album</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/search">Search</Link>
        </Router>
      </div>
    );
  }
}

export default Header;
