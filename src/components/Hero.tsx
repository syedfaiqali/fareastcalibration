import React from 'react';
import './Hero.css';
import banner from '/src/assets/ndcl-banner.png';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">PRECISION CALIBRATION <br /> SERVICES</h1>
          <p className="hero-subtitle">
            Accredited Calibration Laboratory providing reliable measurement solutions 
            for various industrial and scientific instruments.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Our Services</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
