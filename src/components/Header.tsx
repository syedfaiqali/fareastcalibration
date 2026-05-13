import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '/src/assets/ndcl-logo-main.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Accreditation', path: '/accreditation' },
    { label: 'Feedback', path: '/feedback' },
    { label: 'Career', path: '/career' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-contact">
            <span><strong>Call Us:</strong> <a href="tel:09810977012" style={{color: 'inherit', textDecoration: 'none'}}>(+91) 9810977012, 9015904300</a></span>
          </div>
          <div className="top-contact">
            <span><a href="mailto:newdelhicalibrationlaboratory@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>✉️ newdelhicalibrationlaboratory@gmail.com</a></span>
          </div>
        </div>
      </div>
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-container">
            <img src={logo} alt="NDCL Logo" className="logo" />
          </Link>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path} 
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'animate' : ''}`}></div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
