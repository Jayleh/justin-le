import React, { Component } from 'react';

class ContactField extends Component {
  state = { labelClass: '' };

  onFocusInput = () => {
    this.setState({ labelClass: 'active' });
  };

  onBlurInput = ({ value }) => {
    if (value === '') {
      this.setState({ labelClass: '' });
    }
  };

  renderError = ({ error, touched }) => {
    // console.log(touched);
    if (touched && error) {
      console.log('hi');
      return <span className="helper-text red-text">{error}</span>;
    }
  };

  render() {
    const { input, label, meta } = this.props;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            {...input}
            onFocus={this.onFocusInput}
            onBlur={() => this.onBlurInput(input)}
          />
          <label className={this.state.labelClass}>{label}</label>
          {this.renderError(meta)}
        </div>
      </div>
    );
  }
}

export default ContactField;
