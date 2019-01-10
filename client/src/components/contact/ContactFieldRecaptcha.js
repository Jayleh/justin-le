import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import renderError from './utils/renderError';

const ContactFieldRecaptcha = ({ input, meta }) => {
  return (
    <div className="row">
      <div className="col s12">
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={input.onChange}
        />
        {renderError(meta)}
      </div>
    </div>
  );
};

export default ContactFieldRecaptcha;
