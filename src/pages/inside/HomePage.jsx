// HomePage.jsx

import React from 'react';
import './HomePage.css';
import videobackground from '../../Assets/background/background.mp4'
import LeftNavbar from '../insidecomponents/leftnavbar';
import Mainscreenin from '../insidecomponents/mainscreenin';
import NavbarInside from '../insidecomponents/navbarinside';

const HomePage = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-background"> 
      <source src={videobackground} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>
      
            {/* Other content */}
            <div>
            <NavbarInside />
            </div>
            <div>
            <LeftNavbar />
            </div>
            <div>
            <Mainscreenin />
            </div>
    </div>
  );
};

export default HomePage;
