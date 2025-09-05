// src/pages/OrderNow/OrderNow.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./OrderNow.css";
import { motion } from "framer-motion";

export default function OrderNow() {
  return (
    <div className="order-now-page">
      <div className="order-now-header">
        <h1>How to Order</h1>
      </div>

      <div className="order-now-content container">
        <p>
          Ordering from <span>Dil Khush Kitchen</span> is simple:
        </p>

        <ol className="order-steps">
          <li>Browse our <strong>Menu</strong> to explore delicious items.</li>
          <li>Add your favorite dishes to the cart.</li>
          <li>Proceed to checkout and share your details.</li>
          <li>We’ll confirm your order on <strong>WhatsApp</strong>!</li>
        </ol>

        <div className="cta-section">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/menu" className="btn-order-start">
              Go to Menu 🍴
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
