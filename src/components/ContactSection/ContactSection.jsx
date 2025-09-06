import React from 'react';
import './ContactSection.css';
import ContactInfo from '../ContactInfo/ContactInfo';

function ContactSection() {
  return (
    <div className='contact-section text-light py-5 shadow'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection;
