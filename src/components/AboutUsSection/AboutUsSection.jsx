import React from 'react';
import './AboutUsSection.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../../utils/images/about-section-img.jpg';

function AboutUsSection() {
  return (
    <div className="container my-5">
        <div className="flex-column-reverse flex-lg-row row">
            <motion.div 
                className="col-lg-6 d-flex justify-content-center"
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={AboutSectionImg} className='about-section-img img-fluid mt-5 mt-lg-0 shadow' alt="about us" />
            </motion.div>
            <motion.div 
                className="col-lg-6 d-flex flex-column justify-content-center"
                initial={{ opacity: 0, x: 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className='text-uppercase fw-bold fs-1 mb-4 mb-lg-5'>About us</h2>
                <p>Welcome to Dilkhush Kitchen in Gloucester, Our name holds a profound significance for us.
Our mission is to foster eternal joy and happiness
within the local community, and we firmly believe
that heavenly and authentic Indian cuisine serves
as an ideal platform to achieve this. Our tagline,
“Love at every bite!” reflects our mission as we
strive to serve food that becomes more lovable
and enjoyable with every bite.
Beyond traditional Indian dishes, we endeavor to
introduce the finest and most distinctive essence
of Indian cuisine to the residents of Gloucester.
Our menu boasts a diverse selection of
exceptional dishes, catering to vegetarian, vegan,
health-conscious individuals, as well as classic
and popular traditional dishes.!</p>
                <Link to='/about'>
                    <button type='button' className='btn btn-dark btn-lg rounded-0 text-capitalize shadow'>More about us</button>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUsSection;