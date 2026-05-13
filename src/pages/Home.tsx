import React from 'react';
import HeroSlider from '../components/HeroSlider';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      
      {/* Counter Section (Yellow) */}
      <section className="counter-section">
        <div className="container">
          <div className="counter-grid">
            <div className="counter-item">
              <span className="counter-number">800+</span>
              <span className="counter-label">Happy Customer</span>
            </div>
            <div className="counter-item">
              <span className="counter-number">11+</span>
              <span className="counter-label">Team Member</span>
            </div>
            <div className="counter-item">
              <span className="counter-number">15+</span>
              <span className="counter-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* About NDCL Section */}
      <section className="about-ndcl py-100">
        <div className="container">
          <div className="about-grid">
            <div className="about-content-main">
              <span className="subtitle-main">ABOUT NDCL</span>
              <h2 className="title-main">New Delhi Calibration <br /> Laboratory Private Limited (NDCLPL)</h2>
              <div className="yellow-divider"></div>
              <p className="desc-main">
                NDCL is a leading ISO accredited calibration laboratory providing professional 
                calibration services for a wide range of measuring instruments. We are committed 
                to providing the highest quality of service to our clients.
              </p>
              <ul className="about-features">
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Fastest Turnaround Time
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Experienced Technical Team
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  On-Site & In-Lab Calibration
                </li>
              </ul>
              
              <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginTop: '30px'}}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-color)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <span style={{display: 'block', fontSize: '14px', color: 'var(--text-light)', fontWeight: 600}}>Have Any Questions?</span>
                  <a href="tel:09810977012" style={{color: 'var(--secondary-color)', fontSize: '1.5rem', fontWeight: 700, textDecoration: 'none'}}>(+91) 9810977012</a>
                </div>
              </div>
            </div>
            <div className="about-image-main">
              <img src="/src/assets/img-left-1.webp" alt="Laboratory" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section py-100">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose NDCL?</h2>
            <div className="title-divider"></div>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4>NABL Accredited</h4>
              <p>Our lab is accredited by NABL, ensuring global acceptance of our calibration results.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Fast Turnaround</h4>
              <p>We understand your business needs and provide quick, reliable calibration services.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🔬</div>
              <h4>Expert Technicians</h4>
              <p>Highly qualified and experienced engineers using state-of-the-art equipment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h4>Precision Results</h4>
              <p>We guarantee the highest level of accuracy for all your measurement instruments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calibration Parameters (Scraped Data) */}
      <section className="parameters-section bg-light py-100">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Calibration Parameters</h2>
            <div className="title-divider"></div>
          </div>
          
          <div className="services-grid-main">
            <div className="service-card-main">
              <div className="service-icon-main">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3>Mechanical Calibration</h3>
              <p>Precise calibration for dimensional tools, pressure gauges, and vacuum instruments.</p>
              <button className="read-more">Read More →</button>
            </div>

            <div className="service-card-main">
              <div className="service-icon-main">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
              </div>
              <h3>Thermal Calibration</h3>
              <p>Expert calibration for ovens, furnaces, chillers, and temperature sensors.</p>
              <button className="read-more">Read More →</button>
            </div>

            <div className="service-card-main">
              <div className="service-icon-main">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
              </div>
              <h3>Fluid Flow Calibration</h3>
              <p>Accuracy for anemometers, pitot tubes, and fluid measurement devices.</p>
              <button className="read-more">Read More →</button>
            </div>

            <div className="service-card-main">
              <div className="service-icon-main">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3>Electro-Technical</h3>
              <p>Specialized calibration for multimeters, oscilloscopes, and power supplies.</p>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        </div>
      </section>
      {/* Calibration Laboratory (With Image) */}
      <section className="lab-info-section py-100">
        <div className="container">
          <div className="lab-info-grid">
            <div className="lab-info-image">
              <img src="/src/assets/img-left-1.webp" alt="Laboratory" />
            </div>
            <div className="lab-info-content">
              <h2 className="section-title">Calibration Laboratory</h2>
              <div className="title-divider left"></div>
              <p>
                NDCL is equipped with high-precision master instruments and a controlled environment 
                to ensure the highest quality of calibration services. Our laboratory is managed by 
                qualified professionals with extensive experience in industrial and scientific metrology.
              </p>
              <p>
                We provide on-site and in-lab calibration services across various industrial sectors, 
                maintaining strict adherence to international standards and NABL requirements.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-100" style={{ backgroundImage: `url('/src/assets/bg-testimonial.webp')` }}>
        <div className="hero-overlay dark"></div>
        <div className="container relative">
          <div className="section-header text-center">
            <h2 className="section-title text-white">What Our Clients Say</h2>
            <div className="title-divider"></div>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"NDCL has been our partner for years. Their attention to detail and precision is remarkable."</p>
              <div className="client-info">
                <strong>John Doe</strong>
                <span>Manager, TechCorp</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Fast turnaround and extremely professional reports. Highly recommended for industrial calibration."</p>
              <div className="client-info">
                <strong>Sarah Smith</strong>
                <span>Lead Engineer, PharmaFlow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" style={{background: 'var(--secondary-color)', padding: '40px 0'}}>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>
          <h3 style={{color: 'var(--white)', fontSize: '1.8rem', margin: 0, fontWeight: 600}}>
            Call if any query to related to our services
          </h3>
          <a href="tel:09810977012" className="btn btn-primary" style={{background: 'var(--accent-color)', color: 'var(--secondary-color)', fontSize: '1.2rem', padding: '12px 30px'}}>
            📞 (+91) 9810977012
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
