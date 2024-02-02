// LandingPage.js

import React from 'react';
import NavbarOutside from '../outsidecomponents/navbaroutside';
import './LandingPage.css';
import Mainscreen from '../outsidecomponents/mainscreen';
import videobackground from '../../Assets/background/background.mp4'

const LandingPage = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-background"> <source src={videobackground} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>
      {/* Other content */}
      <div className="navbarlandpage">
      <NavbarOutside />
      </div>
      <div className="mainscreenlandpage">
      <Mainscreen />
      </div>
    </div>
  );
};

export default LandingPage;
