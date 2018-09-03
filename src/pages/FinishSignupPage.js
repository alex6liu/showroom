import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import strings from '../../localization';
import Info from '../components/Info';
import Logo from '../components/Logo';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import Greetings from '../components/Greetings';

import '../../sass/components/wrapper.scss';
import '../../sass/pages/signup-page.scss';
import circle from '../../static/other/circle-dot-white.png';

class FinishSignupPage extends Component {
  constructor(props) {
    super(props);
    this.gotoLanding = this.gotoLanding.bind(this);
  }

  gotoLanding() {
    const { history } = this.props;
    history.push({ pathname: '/welcome' });
  }

  render() {
    return (
      <div>
        <Info />
        <Logo />
        <div className="wrapper">
          <ProgressBar step1={circle} step2={circle} step3={circle} step1Classname="step1" step2Classname="step2" step3Classname="step3" />
          <Greetings headingText={strings.formatString(strings.hello, 'Lien')} pText={strings.thanks} />
          <Button className="black" text="finish" onClick={this.gotoLanding} />
        </div>
      </div>
    );
  }
}

FinishSignupPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withRouter(FinishSignupPage);
