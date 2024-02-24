import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/Login.css";
import "./LoginAssets/image.png";
import image from "./LoginAssets/image.png";
import google from "./LoginAssets/google.png";
import { FaUser, FaLock } from "react-icons/fa";
import OAuth from "../Oath/OAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { Loginform } from "../../Services/authServices";
import {
  showErrorToast,
  CommonToastContainer,
} from "../../Services/CommonToaster";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "nanana123@gmail.com",
    password: "nanana123",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !formData.password) {
      showErrorToast("Username and password are required.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      showErrorToast("Invalid email format.");
      return;
    }
    try {
      const result = await Loginform(formData.email, formData.password);
      if (result.status === 201) {
        navigate("/");
      } else {
        showErrorToast(result.data.message || "Oops! Something went wrong.");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      showErrorToast("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#FF3951" }}
        >
          <div className="featured-image mb-3">
            <img
              src={image}
              className="img-fluid"
              style={{ width: "250px" }}
              alt="Logo"
            />
          </div>
          <p
            className="text-white fs-2"
            style={{ fontFamily: "Courier New", fontWeight: 600 }}
          >
            BrokerLK
          </p>
          <strong>
            <small
              className="text-white text-wrap text-center"
              style={{ width: "17rem", fontFamily: "Courier New" }}
            >
              Create and Sell Your Rooms <br></br>Adopt The Boarding House
            </small>
          </strong>
        </div>

        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Welcome Back</h2>
              <p>We are happy to have you back.</p>
            </div>
            <div className="input-group mb-3">
              <FaUser className="icon" />
              <input
                type="text"
                className="form-control form-control-lg bg-light fs-6"
                value={formData.email}
                placeholder="Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="input-group mb-1">
              <FaLock className="icon" />
              <input
                type="password"
                className="form-control form-control-lg bg-light fs-6"
                value={formData.password}
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="form-check"></div>
              <div className="forgot">
                <small>
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </small>
              </div>
            </div>
            <div className="input-group mb-3">
              <Link to="">
                <button
                  onClick={handleLogin}
                  className="btn btn-lg btn-danger w-100 fs-6"
                >
                  Login
                </button>
              </Link>
            </div>
            <OAuth />
            <div className="row">
              <small>
                Don't have an account? <Link to="/register">Sign Up</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
      <CommonToastContainer />
    </div>
  );
};

export default Login;
