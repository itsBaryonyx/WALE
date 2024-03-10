import React from 'react';
import NavbarOutside from '../outsidecomponents/navbaroutside';
import './ContactOutsidePage.css';
import videobackground from '../../Assets/background/background.mp4'
import Mainscreenout from '../outsidecomponents/mainscreenout';
import phone from '../../Assets/elements/phone.png'
import report from '../../Assets/elements/report.png'

const ContactOutsidePage = () => {
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
        <Mainscreenout />
        <h1 className="contact-title">Contact Us</h1>
        <div className="contactoutsidecontainer">
          <div className="contactoutcontainer-row">
            <div className="contactoutcontainer-column">
              <img src={phone} alt="alt-phone"></img>
              <h2 className="contact-name">Phone</h2>
              <p className="contact-description">(Monday to Friday 9:00AM to 4:00PM) +63911-0338-614</p>
            </div>
            <div className="contactoutcontainer-column">
              <img src={report} alt="alt-report"></img>
              <h2 className="contact-name">Report</h2>
              <p className="contact-description">(Monday to Friday 9:00AM to 4:00PM) Wale@Gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOutsidePage;
