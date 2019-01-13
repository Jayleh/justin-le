import React, { Component } from 'react';
import renderError from '../utils/renderError';

class ContactField extends Component {
  state = { labelClass: '' };

  onFocusInput = () => {
    this.setState({ labelClass: 'active' });
  };

  onBlurInput = value => {
    if (value === '') {
      this.setState({ labelClass: '' });
    }
  };

  render() {
    const { input, label, meta } = this.props;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            onFocus={e => {
              input.onFocus(e);
              this.onFocusInput();
            }}
            onBlur={e => {
              input.onBlur(e);
              this.onBlurInput(input);
            }}
          />
          <label className={this.state.labelClass}>{label}</label>
          {renderError(meta)}
        </div>
      </div>
    );
  }
}

export default ContactField;
