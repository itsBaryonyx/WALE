// AboutOutsidePage.jsx

import React from 'react';
import NavbarOutside from '../outsidecomponents/navbaroutside';
import './AboutOutsidePage.css';
import videobackground from '../../Assets/background/background.mp4'
import Mainscreenout from '../outsidecomponents/mainscreenout';

const AboutOutsidePage = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-background"> 
      <source src={videobackground} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>
      
            {/* Other content */}
            <div className="navbarlandpage">
            <NavbarOutside />
            </div>
            <div className="mainscreenlandpage">
            <Mainscreenout />
            <div className="aboutoutsidecontainer">
        </div>
            </div>
    </div>
  );
};

export default AboutOutsidePage;
