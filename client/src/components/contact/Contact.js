import React from 'react';

import './Contact.css';
import cityScapeImg from './images/pexels-photo-373912-min.jpeg';
import glassWindowImg from './images/pexels-photo-1029606-min.jpeg';

const Contact = () => {
  console.log(process.env.REACT_APP_RECAPTCHA_SITE_KEY);
  return (
    <main>
      <div className="row split">
        <div id="msg-container" className="col s12 l6">
          <div className="row msg-row">
            <div className="col s12 center-align">
              <div className="heading">
                <h3>Say Hi.</h3>
              </div>
            </div>
          </div>
          <div className="row msg-row">
            <div className="col s12" />
          </div>
          <div className="row msg-row">
            <form id="msg-form" className="col s12" method="POST" action="">
              <div
                className="g-recaptcha"
                data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              />
            </form>
          </div>
        </div>
        <div className="col s12 l6 image-container">
          <img id="right-img" src={cityScapeImg} alt="City Scape" />
        </div>
      </div>
      <div className="row split">
        <div className="col s12 l6 image-container">
          <img id="left-img" src={glassWindowImg} alt="Glass Window" />
        </div>
        <div id="contact-container" className="col s12 l6">
          <div className="row contact-row">
            <div className="col s12">
              <div className="heading">
                <h3>Contact</h3>
              </div>
              <hr />
            </div>
          </div>
          <div className="row contact-row">
            <div className="col s12">
              <h4>Email</h4>
              <p>jaylehyun@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
