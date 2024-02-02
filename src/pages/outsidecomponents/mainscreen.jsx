// mainscreen.jsx
import React from 'react';
import './mainscreen.css';
import learningimage from '../../Assets/elements/Learning.jpg'

export function Mainscreen() {
  return (
    <div className="mainscreencontainer">
        <img className="learningimage" src={learningimage} alt="Logo" />
    </div>
  );
};

export default Mainscreen;
