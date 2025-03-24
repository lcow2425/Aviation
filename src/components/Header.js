import React from 'react';

function Header({ theme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#1A2526' }}>
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          style={{ color: theme === 'dark' ? '#F5C332' : '#FFFFFF' }}
        >
          Aviomatics<sup style={{ fontSize: '0.5em' }}>*</sup>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <a
                className={`nav-link ${theme === 'dark' ? 'text-warning' : 'text-white'}`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${theme === 'dark' ? 'text-warning' : 'text-white'}`}
                href="#powering"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${theme === 'dark' ? 'text-warning' : 'text-white'}`}
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${theme === 'dark' ? 'text-warning' : 'text-white'}`}
                href="#projects"
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${theme === 'dark' ? 'text-warning' : 'text-white'}`}
                href="#contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;