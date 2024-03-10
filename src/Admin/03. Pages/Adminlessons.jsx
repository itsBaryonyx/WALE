// Adminhomepage.jsx

import React from 'react';
import '../04. Pages CSS/Adminlessons.css';
import videobackground from '../../Assets/background/background.mp4'
import Navbaradmin from '../01. Admin components/navbaradmin';
import MSALesson from '../01. Admin components/msalesson';


const AdminLessons = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-background"> 
      <source src={videobackground} autoPlay loop muted />
        Your browser does not support the video tag.
      </video>
      
            {/* Other content */}
            <div>
            <Navbaradmin />
            </div>
            <div>
            <MSALesson />
            </div>
           
    </div>
  );
};

export default AdminLessons;
