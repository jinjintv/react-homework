import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, label }) => {
  return (
    <button className={type}>
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
