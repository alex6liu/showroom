import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import strings from '../../localization';
import Info from '../components/Info';
import Logo from '../components/Logo';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import SignupForm from '../components/SignupForm';

import whiteArrow from '../../static/other/white-arrow.png';
import blackArrow from '../../static/other/black-arrow.png';
import '../../sass/components/wrapper.scss';
import '../../sass/pages/signup-page.scss';
import circle from '../../static/other/circle-dot-white.png';
import dot from '../../static/other/white-dot.png';
import blackCircle from '../../static/other/circle-dot-black.png';
import blackDot from '../../static/other/black-dot.png';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.gotoBefore = this.gotoBefore.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  gotoBefore() {
    const { history } = this.props;
    history.goBack();
  }

  gotoNext() {
    const { history } = this.props;
    history.push({ pathname: '/finish' });
  }

  render() {
    return (
      <div>
        <Info />
        <Logo />
        <div className="wrapper">
          <ProgressBar step1={circle} step2={circle} step3={dot} step1Classname="step1" step2Classname="step2" step3Classname="trans-step3" />
          <div className="phone-module">
            <div className="side-container">
              <div className="side-components">
                <p>{strings.logOrSign}</p>
                <p>{strings.inMobile}</p>
                <img className="white-arrow" src={whiteArrow} alt="" />
              </div>
              <Button className="trans" text={strings.back} onClick={this.gotoBefore} />
            </div>
            <div className="phone-login">
              <div className="phone-background">
                <ProgressBar step1={blackCircle} step2={blackDot} step3={blackDot} step1Classname="step1" step2Classname="step2" step3Classname="step3" />
                <SignupForm />
              </div>
            </div>
            <div className="side-container">
              <div className="side-components">
                <p>{strings.whenFinished}</p>
                <p>{strings.formatString(strings.tapOnBelow, 'next')}</p>
                <img src={blackArrow} alt="" />
              </div>
              <Button className="black" text={strings.next} onClick={this.gotoNext} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withRouter(SignupPage);
