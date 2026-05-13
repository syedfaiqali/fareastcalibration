import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import bannerImg from '/src/assets/banner-template.jpg';

const slides = [
  {
    id: 1,
    title: "Welcome To New Delhi Calibration Laboratory Private Limited",
    subtitle: "Precise measurement for all mechanical instruments with global standards.",
    image: bannerImg
  },
  {
    id: 2,
    title: "Welcome To New Delhi Calibration Laboratory Private Limited",
    subtitle: "Expert calibration for temperature-sensitive equipment and chambers.",
    image: bannerImg
  },
  {
    id: 3,
    title: "Welcome To New Delhi Calibration Laboratory Private Limited",
    subtitle: "Accurate calibration for anemometers, pitot tubes, and flow meters.",
    image: bannerImg
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <span className="welcome-tag">Welcome To NDCL</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Read More</button>
                <button className="btn btn-secondary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
