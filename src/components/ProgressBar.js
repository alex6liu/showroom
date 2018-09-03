import React from 'react';
import PropTypes from 'prop-types';
import strings from '../../localization';
import '../../sass/components/progress-bar.scss';

const ProgressBar = ({
  step1,
  step2,
  step3,
  step1Classname,
  step2Classname,
  step3Classname,
}) => (
  <div className="progress-bar">
    <div className="step-bar">
      <img alt="" src={step1} />
      <div />
      <img alt="" src={step2} />
      <div />
      <img alt="" src={step3} />
    </div>
    <div className="step-text">
      <span className={step1Classname}>{strings.step1}</span>
      <span className={step2Classname}>{strings.step2}</span>
      <span className={step3Classname}>{strings.step3}</span>
    </div>
  </div>
);

ProgressBar.propTypes = {
  step1: PropTypes.string.isRequired,
  step2: PropTypes.string.isRequired,
  step3: PropTypes.string.isRequired,
  step1Classname: PropTypes.string.isRequired,
  step2Classname: PropTypes.string.isRequired,
  step3Classname: PropTypes.string.isRequired,
};

export default ProgressBar;
