import React from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Header from '../../components/Header/Header';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import ContactSection from '../../components/ContactSection/ContactSection';

function Home() {
  return (
    <div className='home-page'>
        <Header />

        <AboutUsSection />

        <ImageGallery />

        <ContactSection />
    </div>
  )
}

export default Home;