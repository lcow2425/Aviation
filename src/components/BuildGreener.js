import React from 'react';

function BuildGreener({ theme }) {
  const textColor = theme === 'dark' ? '#FFFFFF' : '#1A2526';

  return (
    <section className="py-5" style={{ backgroundColor: '#F5C332' }}>
      <div className="container text-center">
        <h2 style={{ color: textColor }}>Build Greener, Smarter Airports</h2>
        <p className="lead mb-4" style={{ color: textColor }}>
          We help airports achieve sustainability goals with future-ready solutions.
        </p>
        <a href="#contact" className="btn btn-dark btn-lg">Get in Touch</a>
      </div>
    </section>
  );
}

export default BuildGreener;