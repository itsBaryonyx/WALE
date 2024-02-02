// SignUpPage.js

import React from 'react';
import NavbarOutside from '../outsidecomponents/navbaroutside';
import './SignUpPage.css';
import videobackground from '../../Assets/background/background.mp4'
import MainscreenSignUp from '../outsidecomponents/mainscreensignup';

const SignUpPage = () => {
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
            <MainscreenSignUp />
            <div className="signupcomponentcontainer">
        </div>
            </div>
    </div>
  );
};

export default SignUpPage;
