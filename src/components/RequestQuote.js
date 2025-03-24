import React, { useState } from 'react';

function RequestQuote() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(formData)}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#1A2526' }}>
      <div className="container">
        <h2 className="text-white mb-4">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="w-50 mx-auto">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Message"
              rows="4"
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default RequestQuote;