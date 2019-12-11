import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <button onClick={() => openModal("signin")}>Sign in</button>
      <button onClick={() => openModal("signup")}>Sign up</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2>Hi, {currentUser.first_name}</h2>
      <button className="header-button" onClick={logout}>Sign out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;