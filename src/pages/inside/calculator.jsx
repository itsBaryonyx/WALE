// calculator.jsx

import React from 'react';
import './calculator.css';
import videobackground from '../../Assets/background/background.mp4'
import NavbarInside from '../insidecomponents/navbarinside';
import MSC from '../insidecomponents/msc';


const Calculator = () => {
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
            <MSC/>

        </div>
    </div>
  );
};

export default Calculator;
