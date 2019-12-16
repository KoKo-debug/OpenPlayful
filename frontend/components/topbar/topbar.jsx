import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';

const TopBar = () => (
    <header className="navBar">
      <button className="logo-button">
        <Link to="/">
          <img id="logo" src={window.logoWhite} alt="logo"/>
        </Link>
      </button>
      <GreetingContainer />
    </header>
);

export default TopBar;


{/* <AuthRoute path="/signup" component={SignUpFromContainer} />
<AuthRoute path="/signin" component={SignInFormContainer} /> */}