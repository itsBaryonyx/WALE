import React from 'react';
import '../Converter UI CSS/calculator.css';
import videobackground from '../../../Assets/background/background.mp4'
import NavbarInside from '../../insidecomponents/navbarinside';
import MSCV from '../../insidecomponents/Converter components/mscv';

export function Volume() {
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
                <MSCV/>
    
            </div>
        </div>
      );
};

export default Volume;
