import React from 'react';

import GreetingContainer from '../greeting/greeting_container';

const TopBar = () => (
    <header className="navBar">
      <img id="logo" src={window.logoWhite} alt="logo"/>
      <GreetingContainer />
    </header>
);

export default TopBar;


{/* <AuthRoute path="/signup" component={SignUpFromContainer} />
<AuthRoute path="/signin" component={SignInFormContainer} /> */}