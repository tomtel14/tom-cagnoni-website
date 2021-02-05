import React from 'react';
import './FixedBackground.css';
import Navbar from './Navbar';
import Title from './Title';
import About from './About';

function FixedBackground() {
  return (
    <div className="fixed-bg-container">
      <div className="fixed-bg">
        <div className="header-container">
          <Navbar />
          <Title />
          <About />
        </div>
      </div>
    </div>
  );
}

export default FixedBackground;
