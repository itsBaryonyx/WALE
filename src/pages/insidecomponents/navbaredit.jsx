import React from 'react';
import { Link } from 'react-router-dom';
import './navbarinside.css';
import logoinside from '../../Assets/elements/logo.png';

const NavbarEdit = () => {

  return (
    <div className="navbarinsidecontainer">
      <div className="navbarinside">
        <img className="logoinside" src={logoinside} alt="Logo" />
        <Link to="/homepage" className="navbarinsidelogo">
          WALE
        </Link>
          <div>
            <Link to="/" className="logout-in">
              Log-Out
            </Link>
          </div>
        </div>
      </div>
  );
};

export default NavbarEdit;
