import React from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Header from '../../components/Header/Header';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import './Home.css';  // make sure to import the CSS

function Home() {
  return (
    <div className='home-page'>
        <Header customClass="home-header" /> {/* pass a class for custom CSS */}

        <AboutUsSection />

        <ImageGallery />

        <ContactSection />
    </div>
  )
}

export default Home;
