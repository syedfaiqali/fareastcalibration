import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '/src/assets/ndcl-logo-main.png';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col about-col">
            <img src={logo} alt="NDCL Logo" className="footer-logo" />
            <p>
              New Delhi Calibration Laboratory Private Limited (NDCLPL) is a leading provider of 
              calibration and testing services, committed to accuracy and precision.
            </p>
          </div>
          
          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col services-col">
            <h4>Opening Hours</h4>
            <ul style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '14px' }}>
              <li><strong>Mon - Sat:</strong> 9:30 AM - 6:00 PM</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ marginBottom: '15px' }}>Newsletter</h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input type="email" placeholder="Email Address" style={{ padding: '8px 12px', border: 'none', borderRadius: '4px', width: '100%' }} />
                <button style={{ background: 'var(--primary-color)', border: 'none', color: 'white', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}>Go</button>
              </div>
            </div>
          </div>

          <div className="footer-col contact-col">
            <h4>Keep In Touch</h4>
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p>79-B, Sunder Palace, Near Jwala Heri Market, Paschim Vihar, New Delhi-110063</p>
            </div>
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <p>(+91) 9810977012<br/>(+91) 9015904300</p>
            </div>
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <p>info@ndcl.in</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} New Delhi Calibration Laboratory Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
