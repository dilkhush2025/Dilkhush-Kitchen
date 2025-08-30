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

  const [activeSection, setActiveSection] = useState(0); // Only show one
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, quantity: i.quantity - 1 } : i).filter(i => i.quantity > 0));
  };

  const checkout = () => {
    if (!cart.length) return alert('Cart is empty!');
    const message = `Hello, I'd like to order: ${cart.map(i => `${i.name} x${i.quantity}`).join(', ')}`;
    const phoneNumber = '0447894146082';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
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

      {/* Render only active section */}
      <div className="menu-container">
        <div className="menu-section">
          <h2 className="menu-section-title">{currentSection.title}</h2>
          <div className="menu-items">
            {currentSection.items.map((item) => (
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

      {/* Floating Cart Button */}
      <button className="floating-cart-btn" onClick={() => setCartOpen(true)}>
        Cart ({cart.reduce((acc, i) => acc + i.quantity, 0)})
      </button>

      {/* Cart Overlay & Sidebar */}
      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)} />}
      <motion.div
  className={`cart-sidebar ${cartOpen ? 'open' : ''}`}
  initial={{ x: 400 }}
  animate={{ x: cartOpen ? 0 : 400 }}
  transition={{ type: 'tween', duration: 0.3 }}
>
  <div className="cart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ff9e67', paddingBottom: '0.5rem' }}>
    <h3 style={{ color: '#ffb380' }}>Your Cart</h3>
    <button
      onClick={() => setCartOpen(false)}
      style={{
        background: '#ff9e67',
        color: '#111',
        fontWeight: 700,
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.2rem 0.6rem',
        cursor: 'pointer',
      }}
    >
      ×
    </button>
  </div>

  <div className="cart-items" style={{ flexGrow: 1, marginTop: '1rem', overflowY: 'auto' }}>
    {cart.length === 0 ? (
      <p style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>Your cart is empty.</p>
    ) : (
      cart.map((item) => (
        <div key={item.id} className="cart-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', background: '#222', padding: '0.5rem 0.75rem', borderRadius: '0.5rem' }}>
          <span style={{ color: '#ffb380' }}>{item.name} x{item.quantity}</span>
          <div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: '#ff9e67',
                color: '#111',
                border: 'none',
                fontWeight: 700,
                borderRadius: '0.25rem',
                padding: '0.2rem 0.5rem',
                marginRight: '0.3rem',
                cursor: 'pointer',
              }}
            >
              -
            </button>
            <button
              onClick={() => addToCart(item)}
              style={{
                background: '#ff9e67',
                color: '#111',
                border: 'none',
                fontWeight: 700,
                borderRadius: '0.25rem',
                padding: '0.2rem 0.5rem',
                cursor: 'pointer',
              }}
            >
              +
            </button>
          </div>
        </div>
      ))
    )}
  </div>

  <button
    onClick={checkout}
    style={{
      marginTop: '1rem',
      padding: '0.8rem',
      width: '100%',
      background: 'linear-gradient(90deg, #ff9e67, #ffb380)',
      color: '#111',
      fontWeight: 700,
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(255,160,100,0.3)',
    }}
  >
    Checkout via WhatsApp
  </button>
</motion.div>
    </div>
  );
}

export default Menu;
