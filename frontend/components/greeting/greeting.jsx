import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <Link to="/signin">Sign in</Link>
      <Link to="/signup">Sign up</Link>
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