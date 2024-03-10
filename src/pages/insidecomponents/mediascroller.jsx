import React from 'react';
import './mediascroller.css'; // Import the CSS for styling if needed

const MediaScroller = ({ children }) => {
  return (
    <div className="media-scroller snaps-inline">
      {children}
    </div>
  );
};

export default MediaScroller;
