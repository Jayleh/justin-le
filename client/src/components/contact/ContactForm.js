import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ContactField from './ContactField';
import { formInputs, selectOptions } from './formFields';

class ContactForm extends Component {
  renderInputs() {
    return _.map(formInputs, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ContactField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  renderTextArea() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <Field
            name="body"
            component="textarea"
            id="textarea1"
            className="materialize-textarea"
          />
          <label html="textarea1">Your Message</label>
        </div>
      </div>
    );
  }

  renderOptions() {
    return _.map(selectOptions, ({ label, value }) => {
      return (
        <option key={label} value={value}>
          {label}
        </option>
      );
    });
  }

  renderSelect() {
    return (
      <div className="row">
        <div className="col s12">
          <label>How did you find me?</label>
          <Field
            name="connection"
            component="select"
            className="browser-default"
          >
            <option value="" disabled>
              Choose your option
            </option>
            {this.renderOptions()}
          </Field>
        </div>
      </div>
    );
  }

  onSubmit = formValues => {
    console.log(formValues);
    // this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        id="msg-form"
        className="col s12"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        {this.renderInputs()}
        {this.renderTextArea()}
        {this.renderSelect()}
        <div className="row">
          <div className="col s12">
            <div
              className="g-recaptcha"
              data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  _.each(formInputs, ({ name }) => {
    if (!formValues[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
};

export default reduxForm({
  form: 'contactForm',
  validate
})(ContactForm);
