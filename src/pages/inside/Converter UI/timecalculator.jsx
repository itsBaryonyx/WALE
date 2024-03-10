// calculator.jsx

import React from 'react';
import '../Converter UI CSS/calculator.css';
import videobackground from '../../../Assets/background/background.mp4'
import MSTCC from '../../insidecomponents/Converter components/mstcc';
import NavbarInside from '../../insidecomponents/navbarinside';



const TimeCalculator = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-background"> 
      <source src={videobackground} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>

        <div>
            <NavbarInside />
        </div>
        <div className="mainscreenin-calculator">
            <MSTCC/>

        </div>
    </div>
  );
};

export default TimeCalculator;
