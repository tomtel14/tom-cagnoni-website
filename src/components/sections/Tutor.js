import React from 'react';
import './Tutor.css';

function Tutor() {
  return (
    <section id="tutor">
      <h2 className="section-heading">Tutor</h2>
      <div className="section-container">
        <p className="section-text">Tom has been teaching in one-on-one and group settings for over 10 years. As well as
        bringing music to North London he has gone on three trips with Project Sunshine to teach
Ukulele to groups of left-behind children in China. More information can be found here; <a id="cta-link" href="https://www.projectsunshine.org.uk/" target="_blank" rel="noreferrer">www.projectsunshine.org.uk</a> - <a id="cta-link" href="https://www.facebook.com/ProjectSunshineUK/" target="_blank" rel="noreferrer">www.facebook.com/ProjectSunshineUK</a></p>
        <div className="tutor-grid">
          <ul className="tutor-list">
            <li>Private one-on-one tuition available for Guitar, Piano, Ukulele & Music Theory to students of all ages.</li>
            <li>I can provide lessons from my address in Barnet, travel to you or teach online lessons over Zoom/FaceTime.</li>
            <li>I have an enhanced DBS check.</li>
            <li>For details/prices, please feel free to get in touch using the contact details below.</li>
          </ul>
          <div className="tutor-img-cont">
            <img className="tutor-img" src="/images/tom-cagnoni-tutor.jpg" alt="Tom Cagnoni tutoring" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tutor;
