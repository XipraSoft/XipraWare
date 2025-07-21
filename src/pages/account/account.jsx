import React from 'react';
import './account.css';

const Account = () => {
  React.useEffect(() => {
    const loginForm = document.getElementById("LoginForm");
    const regForm = document.getElementById("RegForm");
    const indicator = document.getElementById("Indicator");

    window.register = function () {
      regForm.style.transform = "translatex(0px)";
      loginForm.style.transform = "translatex(0px)";
      indicator.style.transform = "translateX(100px)";
    };

    window.login = function () {
      regForm.style.transform = "translatex(300px)";
      loginForm.style.transform = "translatex(300px)";
      indicator.style.transform = "translate(0px)";
    };
  }, []);

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="images/image1.png" alt="Account Visual" width="100%" />
          </div>
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
                <span onClick={() => window.login()}>Login</span>
                <span onClick={() => window.register()}>Register</span>
                <hr id="Indicator" />
              </div>

              <form id="LoginForm">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn">Login</button>
                <a href="/">Forget Password</a>
              </form>

              <form id="RegForm">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account ;
