import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsWindows, BsGithub } from "react-icons/bs";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/user";

const Login = () => {
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  return (
    <form>
      <div className="login-container">
        <div className="card-login">
          <h2 className="logo">Project One</h2>
          <label className="email-label">Enter your name: </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input-background"
            type="text"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(login({ email: email }));
            }}
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
        </div>
      </div>
    </form>
  );
};

export default Login;
