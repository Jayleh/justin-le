import React from 'react';

import './Contact.css';
import cityScapeImg from './images/pexels-photo-373912-min.jpeg';
import glassWindowImg from './images/pexels-photo-1029606-min.jpeg';

const Contact = () => {
  return (
    <main>
      <div class="row split">
        <div id="msg-container" class="col s12 l6">
          <div class="row msg-row">
            <div class="col s12 center-align">
              <div class="heading">
                <h3>Say Hi.</h3>
              </div>
            </div>
          </div>
          <div class="row msg-row">
            <div class="col s12" />
          </div>
          <div class="row msg-row">
            <form id="msg-form" class="col s12" method="POST" action="" />
          </div>
        </div>
        <div class="col s12 l6 image-container">
          <img id="right-img" src={cityScapeImg} alt="City Scape" />
        </div>
      </div>
      <div class="row split">
        <div class="col s12 l6 image-container">
          <img id="left-img" src={glassWindowImg} alt="Glass Window" />
        </div>
        <div id="contact-container" class="col s12 l6">
          <div class="row contact-row">
            <div class="col s12">
              <div class="heading">
                <h3>Contact</h3>
              </div>
              <hr />
            </div>
          </div>
          <div class="row contact-row">
            <div class="col s12">
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
