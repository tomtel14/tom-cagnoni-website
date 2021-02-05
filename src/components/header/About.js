import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [text, setText] = useState(true);

  const hideText = () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight >= 195) {
      setText(false);
    } else {
      setText(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', hideText);

    return () => {
      window.removeEventListener('scroll', hideText)
    }
  }, []);

  return (
    <div className={text ? "about-container" : "about-container hidden"}>
      <p className="about-text">Tom Cagnoni is an award winning
      Musical Director, Composer, Arranger,
      Instrumentalist and Private Tutor.</p>
      <p className="about-text-more">Primarily a Guitar and Piano player, Tom can also turn his hand to Bass, Double Bass,
      Ukulele, Drum Kit and Vocals. Since graduating from the University of Leeds with Bsc.
Mathematics &amp; Music, Tom has worked in the live music, theatre and education industries.</p>
    </div>
  );
}

export default About;
