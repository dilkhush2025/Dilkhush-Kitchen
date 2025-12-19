import React, { useState, useEffect } from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Header from '../../components/Header/Header';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import './Home.css';  // make sure to import the CSS

function Home() {

  // 🔹 ADD: popup state
  const [showPopup, setShowPopup] = useState(false);

  // 🔹 ADD: show popup on page load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className='home-page'>

        {/* 🔹 ADD: Popup Image */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <button
                className="popup-close"
                onClick={() => setShowPopup(false)}
              >
                &times;
              </button>

              <img
                src={require('../../utils/images/popup-image.jpg')}
                alt="Popup"
              />
            </div>
          </div>
        )}

        {/* ✅ EXISTING CODE (unchanged) */}
        <Header customClass="home-header" />

        <AboutUsSection />

        <ImageGallery />

        <ContactSection />

    </div>
  )
}

export default Home;
