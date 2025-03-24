import React from 'react';

function About({ theme }) {
  const textColor = theme === 'dark' ? '#FFFFFF' : '#1A2526';

  return (
    <section id="powering" className="py-5" style={{ backgroundColor: '#F5C332' }}>
      <div className="container text-center">
        <h2 className="mb-4" style={{ color: textColor }}>Powering Airports Worldwide</h2>
        <p className="lead mb-5" style={{ color: textColor }}>
          Smart. Efficient. Measurable.
        </p>
        <div className="row">
          <div className="col-md-3">
            <h3 style={{ color: textColor }}>17%</h3>
            <p style={{ color: textColor }}>Airports</p>
          </div>
          <div className="col-md-3">
            <h3 style={{ color: textColor }}>30+</h3>
            <p style={{ color: textColor }}>Years</p>
          </div>
          <div className="col-md-3">
            <h3 style={{ color: textColor }}>45</h3>
            <p style={{ color: textColor }}>Countries</p>
          </div>
          <div className="col-md-3">
            <h3 style={{ color: textColor }}>350+</h3>
            <p style={{ color: textColor }}>Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;