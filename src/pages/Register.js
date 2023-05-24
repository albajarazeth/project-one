import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsWindows, BsGithub } from "react-icons/bs";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //makes POST
    console.log(email, password);
  };

  return (
    <form>
      <div className="login-container">
        <form className="card-login card-register">
          <h2 className="logo">Project One</h2>
          <label className="email-label">Enter your email: </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input-background"
            type="text"
          />

          <label className="email-label">Create a password: </label>
          <input
            onChange={(e) => setPassowrd(e.target.value)}
            className="input-background"
            type="text"
          />
          <button
            onClick={(e) => onSubmitHandler(e)}
            type="submit"
            className="login-button"
          >
            Continue
          </button>
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
        </form>
      </div>
    </form>
  );
};

export default Register;
