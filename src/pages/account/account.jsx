import React, { useState, useEffect } from 'react';
import './account.css';

const Account = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });

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

  const validateForm = (data, isRegister = false) => {
    const { username, password, email } = data;
    if (!username || !password || (isRegister && !email)) {
      alert('All fields are required!');
      return false;
    }
    if (username.length < 5 || password.length < 5) {
      alert('Username and password must be at least 5 characters.');
      return false;
    }
    return true;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateForm(loginData)) {
      alert('Login successful!');
      // Proceed with login logic
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validateForm(registerData, true)) {
      alert('Registration successful!');
      // Proceed with registration logic
    }
  };

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

              <form id="LoginForm" onSubmit={handleLoginSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
                <button type="submit" className="btn">Login</button>
                <a href="/">Forget Password</a>
              </form>

              <form id="RegForm" onSubmit={handleRegisterSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={registerData.username}
                  onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
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
