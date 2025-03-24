import React from 'react';

function Hero({ theme }) {
  return (
    <section id="home">
    <div
      className={`py-5 ${theme === 'dark' ? 'text-white' : ''}`}
      style={{
        backgroundImage: 'url("https://via.placeholder.com/1500x600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
      }}
    >
      <div className="container text-center py-5">
        <h1 className="display-4">Smart Solutions for Modern Airports</h1>
        <h2 className="fs-1 mb-4">Safer. Faster.</h2>
        <p className="lead mb-4">
          We provide cutting-edge navigation solutions, ensuring seamless operations and safety for airports worldwide.
        </p>
        <a href="#services" className="btn btn-warning btn-lg">Our Services</a>
      </div>
    </div>
    </section>
  );
}

export default Hero;