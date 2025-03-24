import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer({ theme }) {
  return (
    <footer className="py-5" style={{ backgroundColor: "#1A2526" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className={theme === "dark" ? "text-warning" : "text-white"}>
              Aviomatics
            </h5>
            <p className={theme === "dark" ? "text-warning" : "text-white"}>
              Aviomatics delivers cutting-edge automation solutions for airports
              worldwide. From baggage handling to security and passenge flow, we
              optimize operations for efficiency, safety, and seamless travel
              experiences.
            </p>
          </div>
          <div className="col-md-3">
            <h5 className={theme === "dark" ? "text-warning" : "text-white"}>
              Our Services
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-warning" : "text-white"
                  } `}
                >
                  Airport Operation Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-warning" : "text-white"
                  } `}
                >
                  Special Airport Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-warning" : "text-white"
                  } `}
                >
                  Baggade HandlingSystemms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-warning" : "text-white"
                  } `}
                >
                  Safety and Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-warning" : "text-white"
                  } `}
                >
                  Airport & Airline Essentials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-warning" : "text-white"
                  } `}
                >
                  Sustainable Airport Solutions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className={theme === "dark" ? "text-warning" : "text-white"}>
              Our Locations
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-warning" : "text-white"
                  } `}
                >
                  Canada
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-warning" : "text-white"
                  } `}
                >
                  India
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-decoration-none ${
                    theme === "dark" ? "text-warning" : "text-white"
                  } `}
                >
                  Saudi Arabia
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className={theme === "dark" ? "text-warning" : "text-white"}>
              Office in Canada
            </h5>
            <ul className="list-unstyled">
              <li>
                <p className={theme === "dark" ? "text-warning" : "text-white"}>
                  527 Pine Vista Drive,<br></br>
                  Ottawa, K4A5A7<br></br>
                  +1 647 612 4315
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row">
          <div className="d-flex col-md-9">
            <p
              className={`text-center ${
                theme === "dark" ? "text-warning" : "text-white"
              }`}
            >
              © Copyright 2025
            </p>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-3">
                <a
                  style={{
                    color: theme === "dark" ? "#ffc107" : "#FFFFFF",
                  }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  style={{
                    color: theme === "dark" ? "#ffc107" : "#FFFFFF",
                  }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  style={{
                    color: theme === "dark" ? "#ffc107" : "#FFFFFF",
                  }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="col-md-3">
                <a
                  style={{
                    color: theme === "dark" ? "#ffc107" : "#FFFFFF",
                  }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
