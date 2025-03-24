import React from 'react';

function LatestWorks({ theme }) {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : ''}`} style={{ color: theme === 'dark' ? '#FFFFFF' : '#1A2526' }}>
          Our Latest Works
        </h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card text-white" style={{ backgroundColor: '#2E2E2E' }}>
              <div className="card-body">
                <h5 className="card-title">King A. Aziz Intl. Airport</h5>
                <p className="card-text">Jeddah, KSA</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-white" style={{ backgroundColor: '#2E2E2E' }}>
              <div className="card-body">
                <h5 className="card-title">Neom Bay Airport</h5>
                <p className="card-text">Neom, KSA</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-white" style={{ backgroundColor: '#2E2E2E' }}>
              <div className="card-body">
                <h5 className="card-title">Lucknow Intl. Airport</h5>
                <p className="card-text">Lucknow, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestWorks;