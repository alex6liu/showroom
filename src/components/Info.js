import React from 'react';
import strings from '../../localization';

import img from '../../static/other/info.png';
import '../../sass/components/info-icon.scss';

const Info = () => (
  <a href="/#" className="info-icon">
    <img src={img} alt="" />
    <span>{strings.info}</span>
  </a>
);

export default Info;
