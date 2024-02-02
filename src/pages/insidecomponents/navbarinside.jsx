// NavbarInside.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarinside.css';
import logoinside from '../../Assets/elements/logo.png';

export function NavbarInside() {
  return (
    <div className="navbarinsidecontainer">
      <div className="navbarinside">
        <img className="logoinside" src={logoinside} alt="Logo" />
        <Link to="/homepage" className="navbarinsidelogo">
          WALE
        </Link>
        <div className="navbarinsidebuttons">
        <Link to="/homepage" className="homeinside">
          Home
        </Link>
        <Link to="/aboutin" className="aboutinside">
          About
        </Link>
        <Link to="/contactin" className="contactinside">
          Contact
        </Link>
        </div>
        <div>
        </div>
        <div>
        <Link to="/" className="logout">
          Log-Out
        </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarInside;
