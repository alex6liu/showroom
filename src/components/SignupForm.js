import React from 'react';
import strings from '../../localization';

import '../../sass/components/signup-form.scss';

const SignupForm = () => (
  <form>
    <p>{strings.createAccount}</p>
    <input className="form-input name" type="text" name="name" placeholder="name" disabled="disabled" />
    <input className="form-input email" type="email" name="email" placeholder="email" disabled="disabled" />
    <input className="form-input password" type="password" name="password" placeholder="password" disabled="disabled" />
    <input className="form-submit" type="submit" value="Continue" disabled="disabled" />
    <span>{strings.terms}</span>
  </form>
);

export default SignupForm;
