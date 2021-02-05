import React, { useState, useEffect } from 'react';
import './MusicalDirector.css';

function MusicalDirector() {
  const [mobileMode, setMobileMode] = useState(true);

  const desktopMode = () => {
    if (window.innerWidth >= 960) {
      setMobileMode(false);
    } else {
      setMobileMode(true)
    }
  };

  useEffect(() => {
    desktopMode();
    window.addEventListener('resize', desktopMode)

    return () => {
      window.removeEventListener('resize', desktopMode)
    }
  }, [])

  return (
    <section id="musical-director">
      <h2 className="section-heading">Musical Director</h2>
      <div className="section-container">
        <p className="section-text">Tom has worked with St. Albans based OVO Theatre for the last 5 years as Musical Director
        on numerous productions, winning the Minack Award in 2016 for their adaptation of As You
        Like It. These productions are developed using a combination of covers of classic songs and
original compositions by Tom.</p>
        <h3 className="section-title">Current/Upcoming Projects</h3>
        <p className="section-text">Peter Pan - After a late booking due to COVID uncertainties, Tom composed, arranged and rehearsed
        music for this entire production in 3 weeks. The production opened to sold out audiences
        and critical acclaim in December 2020 but was cut short after just 8 performances due to a
change in lockdown rules. Peter Pan is expected to open again in December 2021. Click <a id="cta-link" href="http://maltingstheatre.co.uk/peter-pan" target='_blank' rel="noreferrer">here</a> for more information.</p>
        <a href="http://maltingstheatre.co.uk/peter-pan" target='_blank' rel="noreferrer">
          <img className="peter-pan-img" src="/images/peter-pan.jpg" alt="Peter Pan poster" />
        </a>
        <h3 className="section-title">Previous Projects</h3>
        <ul className={mobileMode ? "md-projects-list" : "md-projects-list-desktop"}>
          <li className="md-projects-list-item">Peter Pan (Alban Arena)</li>
          <li className="md-projects-list-item">Merry Wives of Windsor (Roman Theatre of St. Albans, Maltings Art Theatre)</li>
          <li className="md-projects-list-item">Twelfth Night Live (Interactive Zoom)</li>
          <li className="md-projects-list-item">As You Like It (Maltings Art Theatre)</li>
          <li className="md-projects-list-item">Twelfth Night (The Rose Playhouse, Maltings Art Theatre)</li>
          <li className="md-projects-list-item">Much Ado About Nothing (Minack Theatre, Roman Theatre of St. Albans)</li>
          <li className="md-projects-list-item">A Midsummer Night's Dream (Roman Theatre of St. Albans)</li>
          <li className="md-projects-list-item">As You Like it (Minack Theatre, Roman Theatre of St. Albans)</li>
          <li className="md-projects-list-item">Americana In Concert* (Theatre Royal Stratford East)</li>
          <li className="md-projects-list-item">Hostage Song** (Finborough Theatre)</li>
          <li className="md-projects-list-item">Americana** (C Venue Edinburgh, Stage@Leeds)</li>
          <li className="md-projects-list-item">Facehunters** (C Venue Edinburgh)</li>
        </ul>
        <div className={mobileMode ? "mobile-mode" : "md-projects-img-cont"}>
          <figure>
            <img className="md-projects-img" src="/images/poster-merry-wives.jpg" alt="Merry Wives of Windsor Poster" />
            <figcaption><q>The robust and ribald romp is punctuated by 1980s hits… performed with verve by the
onstage band and actors.</q><span className="quote-by"> - Daily Express</span></figcaption>
          </figure>
          <figure>
            <img className="md-projects-img" src="/images/poster-peter-pan.jpg" alt="Peter Pan poster" />
            <figcaption><q>The live music furnishes the production with a level of sophistication.</q><span className="quote-by"> - The Stage </span></figcaption>
          </figure>
          <figure>
            <img className="md-projects-img" src="/images/poster-twelfth-night.jpg" alt="Twelfth Night poster" />
            <figcaption><q>The upbeat music is fun, effective and remarkably well synched, played and sung by a
talented actor-muso cast.</q><span className="quote-by"> - Musical Theatre Review</span></figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
}

export default MusicalDirector;

