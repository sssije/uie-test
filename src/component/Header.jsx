import React from 'react';
import amarthaLogo from '../image/logo-amartha.png';
import './Header.scss';
import '../index.scss';

import Nav from './Nav.jsx';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="o-container">
          <div className="header-container">
            <div className="header-logo">
            <a href="/">
              <img className="header-logo__image" src={amarthaLogo} alt="Amartha Logo" />
            </a>
            </div>
            <div className="nav-container">
              <Nav />
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;