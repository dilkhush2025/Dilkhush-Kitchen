import React, { useState } from 'react';
import './Menu.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import breakfast from '../../utils/breakfast';
import lunch from '../../utils/lunch';
import dinner from '../../utils/dinner';
import dessert from '../../utils/dessert';
import drink from '../../utils/drink';
import kidsSpecial from '../../utils/drinks'
import sides from '../../utils/sides'
import desserts from '../../utils/desserts'
import coldDrinks from '../../utils/colddrinks'
import hotDrinks from '../../utils/hotdrinks'

function Menu() {
  const menuSections = [
    { title: 'Starters', items: breakfast },
    { title: 'Mains', items: lunch},
    { title: 'Naan/Bread/Roti', items: drink},
    { title: 'Rice/Biryani', items: dinner},
    { title: 'Kids Special', items: kidsSpecial },
    { title: 'Sides', items: sides },
    { title: 'Desserts', items: desserts },
    { title: 'Hot Drinks', items: hotDrinks },
    { title: 'Cold Drinks', items: coldDrinks },
  ];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="menu-page">
      <header className="menu-header">
        <motion.div 
          className="container header-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Menu</h1>
        </motion.div>
      </header>

      <div className="container menu-container">
        {menuSections.map((section, index) => (
          <div key={section.title} className="menu-section">
            <motion.div 
              className="menu-section-header"
              onClick={() => toggleSection(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h2>{section.title}</h2>
              <span className={`arrow ${openSection === index ? 'open' : ''}`}>▼</span>
            </motion.div>

            <AnimatePresence>
              {openSection === index && (
                <motion.div 
                  className="menu-items"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {section.img && (
                    <img src={section.img} alt={section.title} className="section-image" />
                  )}
                  {section.items.map(item => (
                    <motion.div 
                      key={item.id} 
                      className="menu-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.image && (
                        <img src={item.image} alt={item.name} className="item-image" />
                      )}
                      <div className="item-info">
                        <h3>{item.name}</h3>
                        {item.description && <p>{item.description}</p>}
                        <p className="price">{item.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <motion.div 
        className="container cta-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to='/contact'>
          <button className="btn-reserve">Book Your Table</button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Menu;
