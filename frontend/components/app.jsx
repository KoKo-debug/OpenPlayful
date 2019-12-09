import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFromContainer from './session/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Open playfulll</h1>
      <GreetingContainer />
    </header>
    <Route path="/signup" component={SignUpFromContainer} />
  </div>

);

export default App;