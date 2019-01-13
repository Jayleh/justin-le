import React from 'react';

export default ({ error, touched }) => {
  // console.log(touched);
  if (touched && error) {
    return <span className="helper-text red-text">{error}</span>;
  }
};
