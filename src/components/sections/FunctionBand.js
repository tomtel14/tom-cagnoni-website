import React from 'react';
import './FunctionBand.css'

function FunctionBand() {
  return (
    <section id="function-band">
      <h2 className="section-heading">Function Band</h2>
      <div className="section-container">
        <p className="section-text">Gabriel and the Winterleighs is a pop, funk and soul band born out of one special party.
        Seven friends made up of some of London’s top musicians got together to play for a friend’s
        wedding (the Winterleighs); the dance-floor was packed all night, and it was such a hit that
we knew we had to continue bringing the all-killer-no-filler set to other celebrations! Click <a id="cta-link" href="https://www.lastminutemusicians.com/members/gabrielandthewinterleighs.html" target='_blank' rel="noreferrer">here</a> for more information.</p>

        <div className="func-band-cont">

          <div className="func-band-img-cont">
            <a href="https://www.lastminutemusicians.com/members/gabrielandthewinterleighs.html" target='_blank' rel="noreferrer">
              <img className="func-band-img" src="/images/function-band.jpg" alt="Gabriel and the Winterleighs function band" />
            </a>
          </div>

          <div className="yt-project">
            <div className="iframe-cont yt">
              <iframe title="Gabriel and the Winterleighs - Showreel" width="560" height="315" src="https://www.youtube.com/embed/rVOZJBBde1I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FunctionBand;
