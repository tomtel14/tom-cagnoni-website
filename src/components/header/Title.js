import React, { useState, useEffect } from 'react';
import './Title.css';

function Title() {
  const [title, setTitle] = useState(true);

  const hideTitle = () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight >= 10) {
      setTitle(false);
    } else {
      setTitle(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', hideTitle);

    return () => {
      window.removeEventListener('scroll', hideTitle)
    }
  }, []);

  return (
    <div className={title ? "title-container" : "title-container hidden"}>
      <h1 className="name">Tom Cagnoni</h1>
      <div className="titles-container">
        <div className="roles-container">
          <div className="top-row">
            <h2 className="role">Musical Director <span> | </span></h2>
            <h2 className="role">Composer<span id="line"> | </span></h2>
          </div>
          <div className="bottom-row">
            <h2 className="role">Instrumentalist<span> | </span></h2>
            <h2 className="role">Tutor</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
