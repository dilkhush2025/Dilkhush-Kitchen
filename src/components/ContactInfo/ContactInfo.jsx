import React from 'react';
import { motion } from 'framer-motion';

function ContactInfo() {
  return (
    <motion.div 
      className='d-flex flex-column align-items-center'
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <h2 className='fs-1 mb-3 text-uppercase fw-bold'>Where to find us</h2>
        <p className='mb-5'>Estcourt Road, Gloucester</p>
        <h3 className='text-capitalize'>Opening hours</h3>
        <p className="m-0">Tue - Fri: 16:00 - 22:00</p>
        <p className="m-0">Sat - Sun: 12:00 - 22:00</p>
        <p>Mon: closed</p>
    </motion.div>
  )
}

export default ContactInfo;