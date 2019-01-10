import React from 'react';

const ContactFormSent = props => {
  return (
    <React.Fragment>
      <div>Thank you for your message!</div>
      <button className="btn" onClick={props.onBack}>
        Go Back
      </button>
    </React.Fragment>
  );
};

export default ContactFormSent;
