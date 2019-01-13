import React from 'react';

const ContactFormSent = props => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-content">
          <div className="center">
            <p>Thank you for your message!</p>
          </div>
        </div>
        <div className="card-action">
          <div className="center">
            <button className="btn" onClick={props.onBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactFormSent;
