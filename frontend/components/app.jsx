import React from 'react';
import { Route } from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';
import SignUpFromContainer from './session/signup_form_container';
import SignInFormContainer from './session/signin_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Open playful</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/signup" component={SignUpFromContainer} />
    <AuthRoute path="/signin" component={SignInFormContainer} />
  </div>

);

export default App;