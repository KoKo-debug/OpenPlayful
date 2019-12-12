import React from 'react';
import { Link } from 'react-router-dom';
import PersonalGreetings from './current_user';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <button className="signup-button" onClick={() => openModal("signup")}>Sign up</button>
      <button className="sign-in-button" onClick={() => openModal("signin")}>Sign in</button>
    </nav>
  );

  const personalGreeting = () => (
    <PersonalGreetings currentUser={currentUser} logout={logout} openModal={openModal}/>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;