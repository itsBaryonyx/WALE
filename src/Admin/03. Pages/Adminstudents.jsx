// Adminhomepage.jsx

import React from 'react';
import '../04. Pages CSS/Adminstudents.css';
import videobackground from '../../Assets/background/background.mp4'
import Navbaradmin from '../01. Admin components/navbaradmin';
import MSAList from '../01. Admin components/msalist';

const AdminStudents = () => {
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
            <MSAList/>
            </div>
    </div>
  );
};

export default AdminStudents;
