import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Login/Login.css";
import validateUser from "../../Services/validate.userLogin";
import { Usertoken } from "../../Services/token.userToken";
import "./LoginAssets/image.png";
import image from "./LoginAssets/image.png";
import google from "./LoginAssets/google.png";
import { FaUser, FaLock } from "react-icons/fa";
import {
  validateUsername,
  validatePassword,
  validateConfirmPassword,
} from "../../Services/validate.password";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import TextField from "@mui/material/TextField";
import {
  showSuccessToast,
  showErrorToast,
} from "../../Services/services.toasterMessage";
import axios from "axios";

const Login = ({ updateAuthentication }) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [resetformData, setresetFormData] = useState({
    username: "",
    password: "",
    cnfPassword: "",
  });

  const API_URL = "http://localhost:5001";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setresetFormData((prevData) => ({ ...prevData, [name]: value }));

    setErrorMessages({
      username: "",
      password: "",
      cnfPassword: "",
    });
  };

  const [errorMessages, setErrorMessages] = useState({
    username: "",
    password: "",
    cnfPassword: "",
  });

  //for login form
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateUser(formData);
    setErrorMessage(validationErrors);

    if (Object.values(validationErrors).some((error) => error !== "")) {
      showErrorToast(`Please check the inputs`);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/login", {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        updateAuthentication(true);
            navigate('/');
        console.log("Successfully logged in");
        const { token } = response.data;
        localStorage.setItem("token", token);

        const userinfo = await Usertoken();

        if (userinfo) {
          const { loginflag } = userinfo;
          console.log("test3");
          console.log(loginflag);
          setresetFormData((prevData) => ({
            ...prevData,
            username: userinfo.username,
          }));

          /* if (loginflag > 0 && loginflag < 100) {
            updateAuthentication(true);
            navigate('/');
          } else {
            console.log("need to reset password");
            //openModal();
          } */
        } else {
          console.log("Token not found");
        }
      } else {
        showErrorToast(`Please try again later`);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 401) {
        showErrorToast(`Invalid credentials`);
      } else {
        showErrorToast(`Internal Server Error`);
      }
    }
  };

  const handleReset = () => {
    closeModal();
    updateAuthentication(true);
  };

  const handlepasswordUpdate = async (event) => {
    event.preventDefault();

    const usernameError = validateUsername(resetformData.username);
    const passwordError = validatePassword(resetformData.password);
    const confirmPasswordError = validateConfirmPassword(
      resetformData.password,
      resetformData.cnfPassword
    );

    setErrorMessages({
      username: usernameError,
      password: passwordError,
      cnfPassword: confirmPasswordError,
    });

    if (!usernameError && !passwordError && !confirmPasswordError) {
      try {
        const response = await axios.post(
          `${API_URL}/reset/${resetformData.username}`,
          resetformData
        );

        if (response.status === 200) {
          console.log("Successfully Updated");
          showSuccessToast("Password Successfully Changed!");

          setTimeout(() => {
            closeModal();
            updateAuthentication(true);
          }, 2000);
        } else {
          showErrorToast("Failed to Update password. Please try again.");
        }
      } catch (error) {
        console.error("Error updating Password", error);
      }
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
            brokerLK
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
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <FaUser className="icon" />
                <input
                  className="form-control form-control-lg bg-light fs-6"
                  type="text"
                  placeholder="Username Or Email"
                  name="username"
                  value={formData.username}
                  onChange={(e) => handleChanges(e)}
                />
              </div>
              <div className="input-group mb-1">
                <FaLock className="icon" />
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  value={formData.password}
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChanges(e)}
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
                <button className="btn btn-lg btn-danger w-100 fs-6">
                  Login
                </button>
              </div>
            </form>
            <div className="input-group mb-3">
              <button className="btn btn-lg btn-light w-100 fs-6">
                <img
                  src={google}
                  style={{ width: "20px" }}
                  className="me-2"
                  alt="Google Icon"
                />
                <small>Sign In with Google</small>
              </button>
            </div>
            <div className="row">
              <small>
                Don't have an account? <Link to="/register">Sign Up</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Question Modal"
      >
        <div className="edit-model">
          <h3>Update User</h3>
          <form className="form-container">
            <h3>User Details</h3>
            <TextField
              className="form-control form-control-lg bg-light fs-6"
              name="username"
              value={resetformData.username}
              onChange={handleInputChange}
              label="User Name"
              variant="outlined"
            />
            <label className="error-text">{errorMessages.username}</label>
            <TextField
              className="form-control form-control-lg bg-light fs-6"
              name="password"
              value={resetformData.password}
              onChange={handleInputChange}
              label=" Password"
              variant="outlined"
            />
            <label className="error-text">{errorMessages.password}</label>
            <TextField
              className="form-control form-control-lg bg-light fs-6"
              name="cnfPassword"
              value={resetformData.cnfPassword}
              onChange={handleInputChange}
              label="Confirm Password"
              variant="outlined"
            />
            <label className="error-text">{errorMessages.cnfPassword}</label>

            <div className="btn btn-lg btn-danger w-100 fs-6">
              <button
                type="submit"
                class="submit-button"
                onClick={handlepasswordUpdate}
              >
                Submit
              </button>
              <button type="reset" class="reset-button" onClick={handleReset}>
                Skip
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
