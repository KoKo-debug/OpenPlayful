import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <Link to="/signin">Sign in</Link>
      <Link to="/signup">Sign up</Link>
    </nav>
  )

  return sessionLinks();
};

export default Greeting;