import React from 'react';
import PropTypes from 'prop-types';

import '../../sass/components/button.scss';

const Button = ({
  text,
  className,
  onClick,
}) => (
  <button type="button" className={className} onClick={onClick}>
    { text }
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
