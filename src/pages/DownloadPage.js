import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import strings from '../../localization';
import Info from '../components/Info';
import Logo from '../components/Logo';
import Button from '../components/Button';
import qrcode from '../../static/other/qr-code.png';
import ProgressBar from '../components/ProgressBar';

import '../../sass/components/wrapper.scss';
import '../../sass/components/greetings.scss';
import '../../sass/pages/download-page.scss';
import circle from '../../static/other/circle-dot-white.png';
import dot from '../../static/other/white-dot.png';

class DownloadPage extends Component {
  constructor(props) {
    super(props);
    this.gotoSignup = this.gotoSignup.bind(this);
    this.gotoSkip = this.gotoSkip.bind(this);
  }

  gotoSignup() {
    const { history } = this.props;
    history.push({ pathname: '/signup' });
  }

  gotoSkip() {
    const { history } = this.props;
    history.push({ pathname: '/welcome' });
  }

  render() {
    return (
      <div>
        <Info />
        <Logo />
        <div className="wrapper">
          <ProgressBar step1={circle} step2={dot} step3={dot} step1Classname="step1" step2Classname="trans-step2" step3Classname="trans-step3" />
          <div className="greetings">
            <p>{strings.download1}</p>
            <p>{strings.formatString(strings.download2, 'MODEX.COM/APP')}</p>
            <p>{strings.download3}</p>
          </div>
          <div className="phone-module">
            <Button className="trans" text="skip" onClick={this.gotoSkip} />
            <div className="phone-qr">
              <div>
                <img src={qrcode} alt="" />
              </div>
            </div>
            <Button className="black" text="next" onClick={this.gotoSignup} />
          </div>
        </div>
      </div>
    );
  }
}

DownloadPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};


export default withRouter(DownloadPage);
