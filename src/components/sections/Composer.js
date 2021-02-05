import React from 'react';
import './Composer.css';

function Composer() {
  return (
    <section id="composer">
      <h2 className="section-heading">Composer</h2>
      <div className="section-container">
        <p className="section-text">Tom has a continually expanding repertoire as a composer, ranging from simple acoustic
        songs to full soundtracks. He currently has a number of original theatre productions in
development, with more details to be announced soon.</p>
        <h3 className="section-title">Current/Upcoming Projects</h3>
        <p className="section-text">Peter Pan - Tom composed the musical soundtrack to this production. It includes original songs “No
More Peter Pan”, “Dear Night-Lights” and six further instrumental numbers. Click <a id="cta-link" href="http://maltingstheatre.co.uk/peter-pan" target='_blank' rel="noreferrer">here</a> for more information.</p>
        <a href="http://maltingstheatre.co.uk/peter-pan" target='_blank' rel="noreferrer">
          <img className="peter-pan-img" src="/images/peter-pan.jpg" alt="Peter Pan poster" />
        </a>
        <h3 className="section-title">Previous Projects</h3>
        <div className="composer-projects">
          <div className="yt-project">
            <p className="section-text">“Cadere” was originally composed for a production of The Winter’s Tale, due to be
            performed at the Minack theatre, that has been postponed due to COVID restrictions. This
solo guitar version was arranged to be included in an online service by St. Luke’s Church.</p>
            <div className="iframe-cont yt">
              <iframe title="Cadere" width="560" height="315" src="https://www.youtube.com/embed/PahRMTobOsE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="vim-project">
            <p className="section-text">Anna Brass was commissioned by The Thomas Nashe Project to create a film representing a
            difficult period in the life of Elizabethan writer Thomas Nashe. Tom worked as Assistant
Director on the film and also composed the choral music and credits sequence music.</p>
            <div className="iframe-cont vim">
              <iframe title="Thomas Nashe Lenten Stuff" src="https://player.vimeo.com/video/325637760" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Composer;
