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
          src="https://maps.app.goo.gl/xkfTtp45QwnudZC86https://www.google.com/maps/place/52+Estcourt+Rd,+Gloucester+GL1+3LG/@51.8752948,-2.2390429,17z/data=!3m1!4b1!4m6!3m5!1s0x487106802607c49f:0xc7540aa9d35c8577!8m2!3d51.8752948!4d-2.236468!16s%2Fg%2F11c4xw9x2x?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
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
