import M from 'materialize-css';
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerLinks from './headerLinks';
import './Header.css';

class Header extends Component {
  componentDidMount() {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav);
  }

  renderLinks() {
    return _.map(headerLinks, ({ link, label }) => {
      return (
        <li key={label}>
          <Link to={link}>{label}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <div className="row">
                <div className="col s12">
                  <Link to="/" className="brand-logo">
                    Justin
                  </Link>
                  <button data-target="mobile-nav" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                  </button>
                  <ul className="right hide-on-med-and-down nav-links">
                    {this.renderLinks()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <ul id="mobile-nav" className="sidenav nav-links">
          {this.renderLinks()}
        </ul>
      </header>
    );
  }
}

export default Header;
