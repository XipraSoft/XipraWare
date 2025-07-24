import React, { useState } from 'react';
import '../account/account.css'; 


const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    const { fullName, email, phone, message } = formData;
    if (!fullName || !email || !phone || !message) {
      alert('All fields are required!');
      return false;
    }
    if (fullName.length < 3) {
      alert('Full name must be at least 3 characters.');
      return false;
    }
    if (!/^\d{10,}$/.test(phone)) {
      alert('Enter a valid phone number (at least 10 digits).');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Message sent successfully!');
      // Process form data here
    }
  };

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="image1.png" alt="Contact Visual" width="100%" />
          </div>
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
                <div><strong>Contact Us</strong></div>
                <hr id="Indicator" style={{ transform: 'translateX(0)', width: '130px' }} />
              </div>

              <form id="ContactForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button type="submit" className="btn">Send Message</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
