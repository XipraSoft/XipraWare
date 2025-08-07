// Account.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './account.css';

import { AuthContext } from '/src/context/auth/AuthContext.jsx';

const Account = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  // Handle Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', loginData);
      if (res.data?.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        loginUser(res.data.user, res.data.token);
        alert('Login successful!');
        navigate('/'); // ✅ redirect to home
      } else {
        alert('Invalid login credentials');
      }
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  // Handle Register
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', registerData);
      alert(res.data.message);
      window.login(); // switch to login form
    } catch (err) {
      alert('Registration failed: ' + err.message);
    }
  };

  // Handle form transitions (Login <-> Register)
  useEffect(() => {
    const loginForm = document.getElementById("LoginForm");
    const regForm = document.getElementById("RegForm");
    const indicator = document.getElementById("Indicator");

    window.register = function () {
      regForm.style.transform = "translateX(0)";
      loginForm.style.transform = "translateX(0)";
      indicator.style.transform = "translateX(100px)";
    };

    window.login = function () {
      regForm.style.transform = "translateX(300px)";
      loginForm.style.transform = "translateX(300px)";
      indicator.style.transform = "translateX(0)";
    };
  }, []);

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="image1.png" alt="Account Visual" width="100%" />
          </div>
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
                <span onClick={() => window.login()}>Login</span>
                <span onClick={() => window.register()}>Register</span>
                <hr id="Indicator" />
              </div>

              {/* Login Form */}
              <form id="LoginForm" onSubmit={handleLoginSubmit}>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  placeholder="Email"
                />
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  placeholder="Password"
                />
                <button type="submit" className="btn">Login</button>
                <a href="#">Forgot Password?</a>
              </form>

              {/* Register Form */}
              <form id="RegForm" onSubmit={handleRegisterSubmit}>
                <input
                  type="text"
                  value={registerData.username}
                  onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                  placeholder="Username"
                />
                <input
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  placeholder="Email"
                />
                <input
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  placeholder="Password"
                />
                <button type="submit" className="btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
