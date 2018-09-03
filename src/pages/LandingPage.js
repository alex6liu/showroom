import React from 'react';
import { Link } from 'react-router-dom';
import strings from '../../localization';
import Info from '../components/Info';
import Logo from '../components/Logo';
import Greetings from '../components/Greetings';
import product1 from '../../static/other/product1.jpg';
import product2 from '../../static/other/product2.jpg';
import product3 from '../../static/other/product3.jpg';

import '../../sass/components/wrapper.scss';
import '../../sass/components/product-line.scss';
import '../../sass/pages/landing-page.scss';

const LandingPage = () => (
  <div>
    <Info />
    <div className="wrapper">
      <Logo />
      <Greetings headingText={strings.formatString(strings.hello, 'Lien')} pText={strings.lastCollection} />
      <div className="product-line">
        <Link to="/#"><img alt="" src={product1} /></Link>
        <Link to="/#"><img alt="" src={product2} /></Link>
        <Link to="/#"><img alt="" src={product3} /></Link>
        <Link className="black" to="/">{strings.more}</Link>
      </div>
    </div>
  </div>
);

export default LandingPage;
