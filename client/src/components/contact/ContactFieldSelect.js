import _ from 'lodash';
import React from 'react';
import { selectOptions } from './formFields';
import renderError from './utils/renderError';

const ContactFieldSelect = ({ input, meta }) => {
  const renderOptions = () => {
    return _.map(selectOptions, ({ label, value }) => {
      return (
        <option key={label} value={value}>
          {label}
        </option>
      );
    });
  };

  return (
    <div className="row">
      <div className="col s12">
        <label>How did you find me?</label>
        <select {...input} className="browser-default">
          <option value="" disabled>
            Choose your option
          </option>
          {renderOptions()}
        </select>
        {renderError(meta)}
      </div>
    </div>
  );
};

export default ContactFieldSelect;
