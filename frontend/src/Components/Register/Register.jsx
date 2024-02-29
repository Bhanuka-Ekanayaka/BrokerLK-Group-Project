import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  showSuccessToast,
  showErrorToast,
} from "../../Services/services.toasterMessage";
import validateUser from "../../Services/validate.user";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomTextfield from "./TextField";
import CustomAutoComplete from "./AutoComplete";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Register/Register.css";
import image from "../Login/LoginAssets/image.png";
import {
  FaUser,
  FaLock,
  FaMobileAlt,
  FaAddressCard,
  FaUserEdit,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import userServices from "../../Services/services.user";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "", // Add confirmPassword to the state
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    username: "",
    confirmPassword: "", // Add confirmPassword to the state
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      showErrorToast("Passwords do not match.");
      return;
    }

    const validationErrors = validateUser(formData);
    setErrorMessage(validationErrors);

    if (Object.values(validationErrors).some((error) => error !== "")) {
      console.log(validationErrors);
      showErrorToast("Enter valid Input");
      return;
    }

    try {
      const response = await userServices.createUser(formData);
      showSuccessToast("User successfully added");
      console.log("User created:", response);
      handleReset();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      const { message, attributeName } = error.response.data;
      showErrorToast(`${message}`);

      if (attributeName) {
        if (attributeName === "Fullname") {
          setErrorMessage({
            Fullname: "Name Alredy Taken",
          });
        } else if (attributeName === "Username") {
          setErrorMessage({
            username: "Username already Exists",
          });
        }
      }
      console.error("Error:", error);
    }
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      email: "",
      username: "",
      password: "",
      confirmPassword:"",
    });
    setErrorMessage({
      email: "",
      username: "",
      confirmPassword:"",
    });
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
            <div className="header mb-4">
              <h2>Welcome Back</h2>
              <p>We are happy to have you back</p>
            </div>
            <div className="input-group mb-3">
              <MdEmail className="icon" />
              <CustomTextfield
                data={formData.username}
                error={errorMessage.username}
                name={"username"}
                label={"Username"}
                classtype={"text-line-type1"}
                handleChanges={handleChanges}
              />
              {errorMessage.username && (
                <label className="error-text">{errorMessage.username}</label>
              )}
            </div>
            <div className="input-group mb-1">
              <FaLock className="icon" />
              <CustomTextfield
                data={formData.password}
                error={errorMessage.password}
                name={"password"}
                label={"Password"}
                handleChanges={handleChanges}
              />
            </div>
            <div className="input-group mb-1">
              <FaLock className="icon" />
              <CustomTextfield
                data={formData.confirmPassword}
                error={errorMessage.confirmPassword}
                name={"confirmPassword"}
                label={"Confirm Password"}
                handleChanges={handleChanges}
              />
            </div>
            <div className="input-group mb-1">
              <FaLock className="icon" />
              <CustomTextfield
                data={formData.email}
                error={errorMessage.email}
                name={"email"}
                label={"Email"}
                handleChanges={handleChanges}
              />
              {errorMessage.email && (
                <label className="error-text">{errorMessage.email}</label>
              )}
            </div>
            <div className="input-group mb-3">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-lg btn-danger w-100 fs-6"
              >
                Sign Up
              </button>
              <button
                type="reset"
                className="reset-button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
            <div className="row">
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
