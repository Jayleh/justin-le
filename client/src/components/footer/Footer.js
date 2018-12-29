import _ from 'lodash';
import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { viewLinks, socialLinks } from './footerLinks';
import resume from '../../assets/docs/Justin Le Resume.pdf';
import './Footer.css';
import scrollTop from './scrollTop';

class Footer extends Component {
  componentDidMount() {
    scrollTop($('.scroll-top > button'));
    scrollTop($('.view-link'));
  }

  renderViewLinks = () =>
    _.map(viewLinks, ({ link, label }) => {
      return (
        <li key={label}>
          <Link className="grey-text text-lighten-3 view-link" to={link}>
            {label}
          </Link>
        </li>
      );
    });

  renderSocialLinks = () =>
    _.map(socialLinks, ({ link, icon }) => {
      return (
        <a
          key={icon}
          className="grey-text text-lighten-4"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab ${icon}`} />
        </a>
      );
    });

  render() {
    return (
      <footer className="page-footer blue-grey">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 ">
              <h5 className="white-text">About</h5>
              <ul>
                <li className="grey-text text-lighten-2">Justin Le</li>
                <li className="grey-text text-lighten-2">
                  Developer | Data Analyst
                </li>
                <li className="grey-text text-lighten-2">Irvine, CA 92614</li>
              </ul>
            </div>
            <div className="col s12 m4 offset-m2 ">
              <h5 className="white-text">Site Links</h5>
              <ul>{this.renderViewLinks()}</ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container footer-copyright-content">
            <div className="row valign-wrapper">
              <div className="col s7 m6">
                <div className="code-link">
                  &copy; 2018 &mdash;
                  <a
                    href="https://github.com/Jayleh/justin-le"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    Coded{' '}
                  </a>
                  by Justin Le.
                </div>
              </div>
              <div className="col s4 m3 offset-m2">
                <div className="social-media">
                  {this.renderSocialLinks()}
                  <Link
                    className="grey-text text-lighten-4"
                    to={resume}
                    target="_blank"
                  >
                    <i className="far fa-file-alt" />
                  </Link>
                </div>
              </div>
              <div className="col s1">
                <div className="scroll-top right-align">
                  <button className="grey-text text-lighten-4">
                    <i className="fas fa-chevron-up" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
