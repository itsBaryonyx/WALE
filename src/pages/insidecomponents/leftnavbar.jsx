// mainscreenout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './leftnavbar.css';

export function LeftNavbar() {
  return (
    <div className="leftnavbarcontainer">
      <div className="leftnavbarinside">
        <div className="leftnavbarinsidebuttons">
          <Link to="/time" className="time">
            Time
          </Link>
          <Link to="/speed" className="speed">
            Speed
          </Link>
          <Link to="/perimeter" className="perimeter">
            Perimeter
          </Link>
          <Link to="/area" className="area">
            Area
          </Link>
          <Link to="/volume" className="volume">
            Volume
          </Link>
          <Link to="/temperature" className="temperature">
            Temperature
          </Link>
          <Link to="/meterreading" className="meterreading">
            Meter Reading
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
