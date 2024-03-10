// LogInPage.jsx

import React from 'react';
import NavbarOutside from '../outsidecomponents/navbaroutside';
import './LogInPage.css';
import videobackground from '../../Assets/background/background.mp4';
import MainscreenSignUp from '../outsidecomponents/mainscreensignup';
import LoginComponent from '../outsidecomponents/logincomponent';

const LogInPage = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-background-login">
        <source src={videobackground} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>

      {/* Other content */}
      <div className="navbarlandpage">
        <NavbarOutside />
      </div>
      <div className="mainscreenlandpage">
        <MainscreenSignUp />
        <div className="login-component-container">
          <div className="loging-outside">
            <LoginComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
