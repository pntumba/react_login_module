import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NavigationBar from './components/navigation/NavigationBar';
/*import NewEventPage from './components/events/NewEventPage';*/

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NavigationBar} />
   {/* <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
  <Route path="new-event" component={requireAuth(NewEventPage)} /> */}
  </Route>
);
