import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFromContainer from './session/signup_form_container';
import SignInFormContainer from './session/signin_form_container';

const App = () => (
  <div>
    <header>
      <h1>Open playfulll</h1>
      <GreetingContainer />
    </header>
    <Route path="/signup" component={SignUpFromContainer} />
    <Route path="/signin" component={SignInFormContainer} />
  </div>

);

export default App;