import React from 'react';
import PropTypes from 'prop-types';

import '../../sass/components/greetings.scss';

const Greetings = ({
  headingText,
  pText,
}) => (
  <div className="greetings">
    <h1>{headingText}</h1>
    <p>{pText}</p>
  </div>
);

Greetings.propTypes = {
  headingText: PropTypes.string.isRequired,
  pText: PropTypes.string.isRequired,
};

export default Greetings;
