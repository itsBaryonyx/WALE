// time.jsx

import React from 'react';
import './lessons.css';
import videobackground from '../../Assets/background/background.mp4'
import Mainscreenintime from '../insidecomponents/mainscreenintime';
import NavbarInside from '../insidecomponents/navbarinside';

const Lessons = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-background"> 
      <source src={videobackground} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>

        <div>
            <NavbarInside />
        </div>
        <div className="mainscreenin-time">
            <Mainscreenintime />

        </div>
    </div>
  );
};

export default Lessons;
