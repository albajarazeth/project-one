import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsWindows, BsGithub } from "react-icons/bs";
import "./Register.css";

const Register = () => {
  return (
    <form>
      <div className="login-container">
        <div className="card-login card-register">
          <h2 className="logo">Project One</h2>
          <label className="email-label">Enter your email: </label>
          <input className="input-background" type="text" />

          <label className="email-label">Create a password: </label>
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

export default Register;
