// Navbarsignup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarsignup.css';
import logooutside from '../../Assets/elements/logo.png';

export function NavbarSignup() {
  return (
    <div className="navbaroutsidecontainer">
      <div className="navbaroutside">
        <img className="logooutside" src={logooutside} alt="Logo" />
        <Link to="/homepage" className="navbaroutsidelogo">
          WALE
        </Link>
        <div className="navbaroutsidebuttons">
        <Link to="/" className="homeoutside">
          Home
        </Link>
        <Link to="/aboutout" className="aboutoutside">
          About
        </Link>
        <Link to="/contactout" className="contactoutside">
          Contact
        </Link>
        </div>
        <div>
        <Link to="/login" className="login">
          Log-In
        </Link>
        </div>
        <div>
        <Link to="/signup" className="signup">
          Sign-Up
        </Link>
        </div>h
      </div>
    </div>
  );
}

export default NavbarSignup;
