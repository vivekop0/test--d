import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from './Form';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section position-relative text-center">
        {/* Container for centering the content */}
        <div className="d-flex flex-column justify-content-center align-items-center position-absolute w-100 h-100">
          <h1 className="display-4 text-black">Contact Us</h1>
        </div>

        {/* SVG Wave */}
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ff5500" fillOpacity="1" d="M0,288L48,288C96,288,192,288,288,272C384,256,480,224,576,186.7C672,149,768,107,864,122.7C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
       
      </section>
      <Form/>
    </>
  );
};

export default HeroSection;
