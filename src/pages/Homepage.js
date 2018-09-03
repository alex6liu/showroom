import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import strings from '../../localization';
import Info from '../components/Info';
import Logo from '../components/Logo';
import Greetings from '../components/Greetings';
import Button from '../components/Button';

import '../../sass/pages/home-page.scss';
import '../../sass/components/wrapper.scss';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.gotoSignup = this.gotoSignup.bind(this);
    this.gotoDownload = this.gotoDownload.bind(this);
  }

  gotoSignup() {
    const { history } = this.props;
    history.push({ pathname: '/signup' });
  }

  gotoDownload() {
    const { history } = this.props;
    history.push({ pathname: '/download' });
  }

  render() {
    return (
      <div>
        <Info />
        <Logo />
        <div className="wrapper">
          <Greetings headingText={strings.welcome} pText={strings.checkVisited} />
          <div className="bottom-div">
            <Button className="black" text="yes" onClick={this.gotoSignup} />
            <Button className="trans" text="no" onClick={this.gotoDownload} />
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withRouter(HomePage);
