import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ContactFieldInput from './fields/ContactFieldInput';
import ContactFieldTextArea from './fields/ContactFieldTextArea';
import ContactFieldSelect from './fields/ContactFieldSelect';
import ContactFieldRecaptcha from './fields/ContactFieldRecaptcha';
import validateEmails from './utils/validateEmails';
import { formInputs } from './fields/formFields';

class ContactForm extends Component {
  renderInputs() {
    return _.map(formInputs, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ContactFieldInput}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  renderTextArea() {
    return (
      <Field
        name="message"
        component={ContactFieldTextArea}
        label="Your Message"
      />
    );
  }

  renderReCAPTCHA() {
    return <Field name="recaptcha" component={ContactFieldRecaptcha} />;
  }

  renderSelect() {
    return <Field name="connection" component={ContactFieldSelect} />;
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
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
        {this.renderReCAPTCHA()}
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  errors['email'] = validateEmails(formValues['email'] || '');

  _.each(formInputs, ({ name }) => {
    if (!formValues[name]) {
      errors[name] = `You must provide ${name}`;
    }
  });

  if (!formValues['message']) {
    errors['message'] = 'You must provide message';
  }

  if (!formValues['connection']) {
    errors['connection'] = 'Please select an option';
  }

  if (!formValues['recaptcha']) {
    errors['recaptcha'] = 'reCAPTCHA required';
  }

  return errors;
};

export default reduxForm({
  form: 'contactForm',
  validate
})(ContactForm);
