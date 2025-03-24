import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function FAQs({ theme }) {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : ''}`} style={{ color: theme === 'dark' ? '#FFFFFF' : '#1A2526' }}>
          Frequently Asked Questions
        </h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne"
              >
                What does Aviomatics do?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We provide smart airport solutions, including navigation and safety systems.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                How do your solutions improve efficiency?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Our systems automate processes like baggage handling and passenger screening.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;