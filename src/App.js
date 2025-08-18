// app.js (updated collapse behavior)
import './App.css';
import { Link, NavLink, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// Restaurant Logo
import logo from '../src/utils/images/logo.png';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // control navbar collapse

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // helper: close navbar and (optionally) navigate
  const handleNavClick = () => {
    // close the mobile collapse immediately after click
    setExpanded(false);
    // allow route change to proceed (NavLink/Link does it)
  };

  return (
    <div id="app">
      {/* Navbar */}
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={(val) => setExpanded(val)}
        className={`py-3 ${scrolled ? 'navbar-colored shadow-sm' : 'navbar-transparent'} transition-all`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={handleNavClick}>
            <img
              src={logo}
              alt="Dil Khush Kitchen"
              className="navbar-logo me-2"
            />
            <span className="fw-bold brand-text">Dil Khush Kitchen</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded={expanded} onClick={() => setExpanded(prev => !prev)} />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `nav-link mx-2 text-uppercase fw-semibold ${isActive ? 'active-link' : ''}`
                  }
                  onClick={handleNavClick}
                >
                  {item}
                </NavLink>
              ))}
              <Link to="/contact" onClick={handleNavClick}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn order-btn ms-lg-3"
                >
                  Order Now
                </motion.button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
