import React, { useState } from 'react';
import axios from 'axios';
import '../account/account.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      setMessage(res.data.message || "Check your email for reset link.");
    } catch (err) {
      setMessage("Something went wrong: " + err.message);
    }
  };

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="/image1.png" alt="Visual" width="100%" />
          </div>
          <div className="col-2">
            <div className="form-container">

              {/* Styled Reset Password Heading */}
              <div className="single-tab-heading">
  <b><h4>Reset Password</h4></b>
  <hr className="single-tab-underline" />
</div>


              {/* Reset Password Form */}
              <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn">Send Reset Link</button>
              </form>

              {/* Response message */}
              {message && <p style={{ marginTop: '15px' }}>{message}</p>}

              {/* Back to Login Button */}
              <button
                type="button"
                className="btn"
                style={{ marginTop: '10px', backgroundColor: '#555' }}
                onClick={() => window.location.href = '/account'}
              >
                Back to Login
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
