import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsWindows, BsGithub } from "react-icons/bs";
import "./Login.css";

const Login = () => {
  return (
    <form>
      <div className="login-container">
        <div className="card-login">
          <h2 className="logo">Project One</h2>
          <label className="email-label">Enter your name: </label>
          <input className="input-background" type="text" />
          <button className="login-button">Continue</button>
          <span>.................</span>
          <span>or</span>
          <div className="icons-container">
            <ul className="login-icons">
              <li>
                <FcGoogle className="medium-icon" />
              </li>
              <li>
                <BsWindows className="medium-icon" />
              </li>
              <li>
                <BsGithub className="medium-icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
