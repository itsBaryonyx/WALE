// AboutOutsidePage.jsx

import React from 'react';
import NavbarOutside from '../outsidecomponents/navbaroutside';
import './AboutOutsidePage.css';
import videobackground from '../../Assets/background/background.mp4'
import Mainscreenout from '../outsidecomponents/mainscreenout';

const AboutOutsidePage = () => {
  return (
    <div className='aboutoutsidecontainer'>
      <video autoPlay loop muted className="video-background"> 
        <source src={videobackground} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>
      
      <div className="navbarlandpage">
        <NavbarOutside />
      </div>
      <div className="mainscreenlandpage">
        <Mainscreenout />
        <div className="aboutoutsidecontainer">
          <h1 className='aboutoutsidecontainer-h1'>Who's WALE?</h1>
          <p className='aboutoutsidecontainer-p'>WALE, or Web-based Adaptive Learning Experience, is all about making learning easier and fun. It uses technology to personalize lessons for each student, so they can learn in a way that suits them best. With fun learning modules and real-life examples, WALE helps students understand subjects like math better. It's like having a teacher that knows exactly how you learn and gives you lessons tailored just for you.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutOutsidePage;
