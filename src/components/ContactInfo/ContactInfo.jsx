import React from 'react';
import { motion } from 'framer-motion';

function ContactInfo() {
  return (
    <motion.section
      className="d-flex flex-column align-items-center text-center p-4"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 
        className="fs-1 mb-3 text-uppercase fw-bold" 
        style={{
          background: "linear-gradient(135deg, #FFDD55, #FF7F50)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Where to find us
      </h2>
      <p className="mb-4 fs-5">Estcourt Road, Gloucester</p>

      <div className="mb-5 w-100" style={{ maxWidth: "600px", height: "300px" }}>
        <iframe
          title="Estcourt Road Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.214620101649!2d-2.236468!3d51.8752948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487106802607c49f%3A0xc7540aa9d35c8577!2s52%20Estcourt%20Rd%2C%20Gloucester%20GL1%203LG!5e0!3m2!1sen!2suk!4v1760131268306!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "1rem" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <h3 className="text-capitalize mb-3">Opening hours</h3>
      <ul className="list-unstyled fs-6 fw-semibold">
        <li>Pre Order Starts: 10:00</li>
        <li>Tue - Fri: 16:00 - 22:00</li>
        <li>Sat - Sun: 12:00 - 22:00</li>
        <li>Mon: Closed</li>
      </ul>
    </motion.section>
  );
}

export default ContactInfo;
