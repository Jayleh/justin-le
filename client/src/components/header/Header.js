import M from 'materialize-css';
import _ from 'lodash';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import headerLinks from './headerLinks';

import styles from './Header.module.css';

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

  styleNavLanding(location, selector) {
    if (selector === 'nav-wrapper') {
      return location.pathname === '/' ? styles['nav-dark'] : '';
    } else if (selector === 'sidenav-trigger') {
      return location.pathname === '/'
        ? styles['sidenav-trigger-dark']
        : 'white-text';
    }
  }

  render() {
    const { location } = this.props;

    return (
      <header>
        <nav className={styles.nav}>
          <div
            className={`nav-wrapper ${
              styles['nav-wrapper']
            } ${this.styleNavLanding(location, 'nav-wrapper')}`}
          >
            <div className="container">
              <div className="row">
                <div className="col s12">
                  <Link to="/" className={`brand-logo ${styles['brand-logo']}`}>
                    Justin
                  </Link>
                  <button
                    data-target="mobile-nav"
                    className={`sidenav-trigger ${
                      styles['sidenav-trigger']
                    } ${this.styleNavLanding(location, 'sidenav-trigger')}`}
                  >
                    <i className="material-icons">menu</i>
                  </button>
                  <ul
                    className={`right hide-on-med-and-down nav-links ${
                      styles['nav-links']
                    }`}
                  >
                    {this.renderLinks()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <ul
          id="mobile-nav"
          className={`sidenav nav-links ${styles['nav-links']}`}
        >
          {this.renderLinks()}
        </ul>
      </header>
    );
  }
}

export default withRouter(Header);
