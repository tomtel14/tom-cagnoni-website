import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-heading">Contact</h2>
      <div className="section-container">
        <p className="section-text">For any enquiries please feel free to contact me using the details below.</p>
        <div className="icons-cont">
          <div className="icon-cont phone-cont">
            <i className="fas fa-phone-alt"></i>
            <a href="tel:07724461485">07724 461485</a>
          </div>
          <div className="icon-cont email-cont">
            <i className="far fa-envelope"></i>
            <a href="mailto:tomcagnoni@gmail.com">tomcagnoni@gmail.com</a>
          </div>
        </div>
        <div className="contact-img-cont">
          <img src="/images/tom-cagnoni-piano.jpg" alt="Tom Cagnoni playing piano" />
        </div>
      </div>
    </section>
  )
}

export default Contact;
