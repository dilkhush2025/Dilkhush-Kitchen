import React, { useState } from 'react';
import './Menu.css';
import { motion } from 'framer-motion';
import breakfast from '../../utils/breakfast';
import lunch from '../../utils/lunch';
import dinner from '../../utils/dinner';
import drink from '../../utils/drink';
import kidsSpecial from '../../utils/drinks';
import sides from '../../utils/sides';
import desserts from '../../utils/desserts';
import coldDrinks from '../../utils/colddrinks';
import hotDrinks from '../../utils/hotdrinks';

function Menu() {
  const menuSections = [
    { title: 'Starters', items: breakfast },
    { title: 'Mains', items: lunch },
    { title: 'Naan/Bread/Roti', items: drink },
    { title: 'Rice/Biryani', items: dinner },
    { title: 'Kids Special', items: kidsSpecial },
    { title: 'Sides', items: sides },
    { title: 'Desserts', items: desserts },
    { title: 'Hot Drinks', items: hotDrinks },
    { title: 'Cold Drinks', items: coldDrinks },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i).filter(i => i.quantity > 0));
  };

const checkout = () => {
  if (!cart.length) return alert('Cart is empty!');

  const message = cart
    .map(i => `${i.name} x${i.quantity}`)
    .join(', ');

  const text = `Hello, I'd like to order: ${message}`;

  // Ensure full international format, no +, no spaces
  const phoneNumber = '0447877595717';

  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  link.target = '_blank';

  // Append, trigger click, remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const currentSection = menuSections[activeSection];

  return (
    <div className="menu-page">
      {/* Header */}
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

      {/* Topbar Tabs + Cart */}
      <div className="menu-topbar">
        <div className="menu-tabs">
          {menuSections.map((sec, idx) => (
            <button
              key={sec.title}
              className={`tab-btn ${idx === activeSection ? 'active' : ''}`}
              onClick={() => setActiveSection(idx)}
            >
              {sec.title}
            </button>
          ))}
        </div>
        <button className="cart-preview" onClick={() => setCartOpen(true)}>
          Cart ({cart.reduce((acc, i) => acc + i.quantity, 0)})
        </button>
      </div>

      {/* Active Section */}
      <div className="menu-container">
        <div className="menu-section">
          <h2 className="menu-section-title">{currentSection.title}</h2>
          <div className="menu-items">
            {currentSection.items.map(item => (
              <motion.div
                key={item.id}
                className="menu-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.image && <img src={item.image} alt={item.name} className="item-image" />}
                <div className="item-info">
                  <h3>{item.name}</h3>
                  {item.description && <p>{item.description}</p>}
                  <p className="price">{item.price}</p>
                  <button className="btn-add" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Cart Button (bottom right) */}
      <button className="floating-cart-btn" onClick={() => setCartOpen(true)}>
        Cart ({cart.reduce((acc, i) => acc + i.quantity, 0)})
      </button>

      {/* Cart Overlay & Sidebar */}
      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)} />}
      <motion.div
        className="cart-sidebar"
        initial={{ x: 400 }}
        animate={{ x: cartOpen ? 0 : 400 }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="btn-close" onClick={() => setCartOpen(false)}>×</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name} x{item.quantity}</span>
                <div>
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        <button className="btn-checkout" onClick={checkout}>Checkout via WhatsApp</button>
      </motion.div>
    </div>
  );
}

export default Menu;
