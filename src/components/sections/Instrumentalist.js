import React from 'react';
import './Instrumentalist.css';

function Instrumentalist() {
  return (
    <section id="instrumentalist">
      <h2 className="section-heading">Instrumentalist / Session Musician</h2>
      <div className="section-container">
        <p className="section-text">Tom has been performing on stage for over 15 years as an instrumentalist and vocalist. This
        includes gigs at Wilderness Festival, Isle of Wight Festival, Greenbelt Festival, Union Chapel,
        Hackney Round Chapel, Campfire Collective, Oval Space &amp; Omeara. He is available for live
bookings.</p>
        <div className="instrumentalist-img-cont">
          <img className="guitarist-img" src="/images/tom-cagnoni-guitarist.jpg" alt="Tom Cagnoni playing guitar" />
          <img className="studio-img" src="/images/tom-cagnoni-studio.jpg" alt="Tom Cagnoni in the studio" />
        </div>
        <h3 className="section-title">Guitarist Studio Work</h3>
        <p className="section-text">Tom played guitar on these songs, which all come from the soundtrack of Americana by Gez
        Mez. They were recorded at Parr Street Studios in Liverpool. “Leather” was the debut single
of the project and received playing interest from BBC Radio 2.</p>
        <div className="iframe-cont-spot">
          <iframe title="Leather" src="https://open.spotify.com/embed/album/5HjU5r3vDkIjp8gV1rqpy0" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>

        <div className="instrumentalist-projects">
          <div className="yt-project">
            <p className="section-text">“Crystal Meth” was the second single to be released by Hungry Bitches Productions from
the Americana soundtrack.</p>
            <div className="iframe-cont yt">
              <iframe title="Crystal Meth" width="560" height="315" src="https://www.youtube.com/embed/U1RR51C07Dg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="yt-project">
            <p className="section-text">This live demo of “My Favourite Guy” was recorded during the Americana studio sessions to
be released as a bonus track.</p>
            <div className="iframe-cont yt">
              <iframe title="Favourite Guy" width="560" height="315" src="https://www.youtube.com/embed/UgPZmxwlMiw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Instrumentalist;
