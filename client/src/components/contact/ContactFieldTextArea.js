import React from 'react';
import renderError from './utils/renderError';

const ContactFieldTextArea = ({ input, label, meta }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <textarea {...input} id="textarea1" className="materialize-textarea" />
        <label htmlFor="textarea1">{label}</label>
        {renderError(meta)}
      </div>
    </div>
  );
};

export default ContactFieldTextArea;
