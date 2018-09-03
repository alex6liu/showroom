import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import DownloadPage from './pages/DownloadPage';
import HomePage from './pages/Homepage';
import FinishSignupPage from './pages/FinishSignupPage';
import '../sass/global.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/welcome" component={LandingPage} />
      <Route exact path="/download" component={DownloadPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/finish" component={FinishSignupPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
