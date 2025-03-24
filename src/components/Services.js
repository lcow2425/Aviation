import React from 'react';

function Services() {
  return (
    <section id="services"  className="py-5" style={{ backgroundColor: '#F5F6F5' }}>
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: '#1A2526' }}>Smart Systems for Smarter Airports</h2>
        <div className="row mb-4">
          <div className="col-md-6">
            <h3 style={{ color: '#1A2526' }}>Efficiency. Automation. Precision.</h3>
            <p>
              Airport Operation Systems: Movement and ground handling systems to ensure smoother operations.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Airport Operations"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 order-md-2">
            <h3 style={{ color: '#1A2526' }}>Special Airport Systems</h3>
            <p>
              Advanced tools such as self-service check-in, baggage handling, and access control.
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Special Systems"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <h3 style={{ color: '#1A2526' }}>Baggage Handling Systems</h3>
            <p>
              Automated baggage sorting and tracking systems, from check-in to boarding.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Baggage Handling"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 order-md-2">
            <h3 style={{ color: '#1A2526' }}>Safety and Security</h3>
            <p>
              Passenger screening, controlled access, and reliable systems for a safe environment.
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Safety and Security"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3 style={{ color: '#1A2526' }}>Airport & Airline Essentials</h3>
            <p>
              Security, boarding, and operational systems to keep things running efficiently.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Airline Essentials"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;