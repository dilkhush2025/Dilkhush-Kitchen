import React, { useState, useEffect } from 'react';
import './Menu.css';
import { motion } from 'framer-motion';

// Menu data imports
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

  // Cart & customer info
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  const [firstName, setFirstName] = useState(() => localStorage.getItem('firstName') || "");
  const [lastName, setLastName] = useState(() => localStorage.getItem('lastName') || "");
  const [phoneNumber, setPhoneNumber] = useState(() => localStorage.getItem('phoneNumber') || "");
  const [customerEmail, setCustomerEmail] = useState(() => localStorage.getItem('customerEmail') || "");
  const [allergies, setAllergies] = useState(() => localStorage.getItem('allergies') || "");
  const [deliveryType, setDeliveryType] = useState(() => localStorage.getItem('deliveryType') || "");
  const [preferredTime, setPreferredTime] = useState(() => localStorage.getItem('preferredTime') || "");
  const [address1, setAddress1] = useState(() => localStorage.getItem('address1') || "");
  const [address2, setAddress2] = useState(() => localStorage.getItem('address2') || "");
  const [postcode, setPostcode] = useState(() => localStorage.getItem('postcode') || "");
  const [paymentMethod, setPaymentMethod] = useState(() => localStorage.getItem('paymentMethod') || "");

  const [cartOpen, setCartOpen] = useState(false);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('customerEmail', customerEmail);
    localStorage.setItem('allergies', allergies);
    localStorage.setItem('deliveryType', deliveryType);
    localStorage.setItem('preferredTime', preferredTime);
    localStorage.setItem('address1', address1);
    localStorage.setItem('address2', address2);
    localStorage.setItem('postcode', postcode);
    localStorage.setItem('paymentMethod', paymentMethod);
  }, [
    cart, firstName, lastName, phoneNumber, customerEmail, allergies,
    deliveryType, preferredTime, address1, address2, postcode, paymentMethod
  ]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
          .filter(i => i.quantity > 0)
    );
  };

  const total = cart.reduce((sum, i) => sum + parseFloat(i.price.replace(/[^0-9.-]+/g, "")) * i.quantity, 0);

  const checkout = () => {
    if (!cart.length) return alert('Cart is empty!');
    if (!firstName || !lastName) return alert('Please enter your full name.');
    if (!phoneNumber) return alert('Please enter your phone number.');
    if (!allergies) return alert('Please specify allergies (or type "None").');
    if (!deliveryType) return alert('Please select Collection or Delivery.');
    if (!paymentMethod) return alert('Please select a payment method.');

    const itemsList = cart.map(i => {
      const price = parseFloat(i.price.replace(/[^0-9.-]+/g, ""));
      return `• ${i.name} x${i.quantity} — £${(price * i.quantity).toFixed(2)}`;
    }).join("\n");

    const text = `
📦 *Order Details*:
${itemsList}
-------------------
💰 Total: £${total.toFixed(2)}

👤 *Customer Details*:
Name: ${firstName} ${lastName}
Phone: ${phoneNumber}
Email: ${customerEmail || "N/A"}
Allergies: ${allergies}
Delivery Option: ${deliveryType}
Preferred Time: ${preferredTime || "Not specified"}
${deliveryType === "Delivery" ? `Address: ${address1}, ${address2}, ${postcode}` : ""}
Payment: ${paymentMethod}

🔒 Your personal data will be used to process your order and may be used for other purposes, including promotional campaigns and announcements.
    `;

    const phone = "447877595717";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const currentSection = menuSections[activeSection];

  return (
    <div className="menu-page">
      {/* Header */}
      <header className="menu-header">
        <motion.div className="container header-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h1>Our Menu</h1>
        </motion.div>
      </header>

      {/* Topbar */}
      <div className="menu-topbar">
        <div className="menu-tabs-wrapper">
          <div className="menu-tabs">
            {menuSections.map((sec, idx) => (
              <button
                key={sec.title}
                className={`tab-btn ${idx === activeSection ? 'active' : ''}`}
                onClick={() => setActiveSection(idx)}>
                {sec.title}
              </button>
            ))}
          </div>
        </div>
        <button className="cart-preview" onClick={() => setCartOpen(true)}>
          Cart ({cart.reduce((acc, i) => acc + i.quantity, 0)})
        </button>
      </div>

      {/* Menu Items */}
      <div className="menu-container">
        <div className="menu-section">
          <h2 className="menu-section-title">{currentSection.title}</h2>
          <div className="menu-items">
            {currentSection.items.map(item => (
              <motion.div key={item.id} className="menu-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}>
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

      {/* Cart Sidebar */}
      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)} />}
      <motion.div className="cart-sidebar"
        initial={{ x: 400 }}
        animate={{ x: cartOpen ? 0 : 400 }}
        transition={{ type: 'tween', duration: 0.3 }}>
        
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="btn-close" onClick={() => setCartOpen(false)}>×</button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? <p>Your cart is empty.</p> : (
            <>
              {cart.map(item => {
                const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
                const itemTotal = (price * item.quantity).toFixed(2);
                return (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-main">
                      <span>{item.name} x{item.quantity}</span>
                      <span>£{itemTotal}</span>
                    </div>
                    <div className="cart-item-actions">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </div>
                );
              })}
              <div className="cart-summary">
                <h4>Order Summary</h4>
                <p>Total: <strong>£{total.toFixed(2)}</strong></p>
              </div>
            </>
          )}

          {/* Customer Details */}
          <h4 className="cart-details-title">Customer Details</h4>
          <div className="cart-details">
            <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} className="cart-input" />
            <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} className="cart-input" />
            <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="cart-input" />
            <input type="email" placeholder="Email" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} className="cart-input" />

            <label className="cart-label">Allergies / Dietary Restrictions *</label>
            <input type="text" placeholder="E.g., Nuts, Gluten, Dairy or None" value={allergies} onChange={e => setAllergies(e.target.value)} className="cart-input" required />

            <label className="cart-label">Collection or Delivery *</label>
            <select value={deliveryType} onChange={e => setDeliveryType(e.target.value)} className="cart-input" required>
              <option value="">-- Select Option --</option>
              <option value="Collection">Collection</option>
              <option value="Delivery">Delivery</option>
            </select>

            {deliveryType === "Delivery" && (
              <>
                <input type="text" placeholder="Address Line 1" value={address1} onChange={e => setAddress1(e.target.value)} className="cart-input" />
                <input type="text" placeholder="Address Line 2" value={address2} onChange={e => setAddress2(e.target.value)} className="cart-input" />
                <input type="text" placeholder="Postcode" value={postcode} onChange={e => setPostcode(e.target.value)} className="cart-input" />
              </>
            )}

            <label className="cart-label">
              {deliveryType === "Delivery" ? "Preferred Delivery Time" : "Preferred Collection Time"}
            </label>
            <input type="time" value={preferredTime} onChange={e => setPreferredTime(e.target.value)} className="cart-input" />

            <label className="cart-label">Payment Method *</label>
            <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} className="cart-input" required>
              <option value="">-- Select Payment Method --</option>
              <option value="Cash on Delivery/Collection">Cash on Delivery/Collection</option>
              <option value="Card Payment on Delivery/Collection">Card Payment on Delivery/Collection</option>
              <option value="Bank Transfer before Delivery/Collection">Bank Transfer before Delivery/Collection</option>
            </select>

            <p className="privacy-note">
              🔒 Your personal data will be used to process your order and may be used for other purposes, including promotional campaigns and announcements.
            </p>
          </div>
        </div>

        <button className="btn-checkout-fixed" onClick={checkout}>
          Checkout via WhatsApp
        </button>
      </motion.div>
    </div>
  );
}

export default Menu;
