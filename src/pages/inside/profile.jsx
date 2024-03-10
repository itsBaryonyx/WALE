// profile.jsx

import React from 'react';
import './profile.css';
import videobackground from '../../Assets/background/background.mp4'
import Mainscreenprofile from '../insidecomponents/mainscreenprofile';
import NavbarEdit from '../insidecomponents/navbaredit';

const Profile = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-background"> 
      <source src={videobackground} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>
      
            {/* Other content */}
            <div>
            <NavbarEdit />
            </div>
            <div className="mainscreenin-profile">
            <Mainscreenprofile />
            </div>
    </div>
  );
};

export default Profile;
