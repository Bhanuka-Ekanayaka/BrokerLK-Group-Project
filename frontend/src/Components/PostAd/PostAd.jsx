import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './PostAd.css'
import { useRef } from "react";
import NavBar from "../Child/NavBar/NavBar";
import { showSuccessToast, showErrorToast, CommonToastContainer } from '../../Services/CommonToaster';

import Footer from "../Child/Footer/Footer";
import { PostingAd } from "../../Services/authServices";

const categories = ["Room", "House", "Boarding"];
const locations = ["Matara Town", "Meddawaththa", "Wellamadama", "Gandara", "SK Town"];

const PostAd = () => {

  const navRef = useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle('active');
    }
  const navigate = useNavigate();

  const [values, setValues] = useState({
    images: [],
    title: "",
    category: "",
    price: "",
    location: "",
    contact: "",
    description: "",
    error: "",
    loading: false,
  });

  const {
    images,
    title,
    category,
    price,
    location,
    contact,
    description,
    error,
    loading,
  } = values;

  const handleChange = (e) =>
  setValues({ ...values, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  console.log('data', values);

  try {
    const result = await PostingAd(values);
    console.log('result AD', result);

    if (result.status === 201) {
      showSuccessToast('Successfully Posted');
      navigate('/');
    } else {
      console.log('fail');
      showErrorToast('Oops! Something went wrong.');
    }
  } catch (error) {
    showErrorToast('Try Again.');
  }
};
    
  return (
    <>
    <NavBar navRef={navRef} showNavBar={showNavbar} />
    <div className="container d-flex justify-content-center align-items-center" >
    <form className="form shadow rounded p-3 mt-5" onSubmit={handleSubmit}>
      <h3 className="text-center mb-3">Create An Ad</h3>
      <div className="mb-3 text-center">
        <label htmlFor="image">
          <div className="btn btn-secondary btn-sm">
            <FaCloudUploadAlt size={30} /> Upload Image
          </div>
        </label>
        <input type="file" id="image" style={{ display: "none" }} accept="image/*" multiple onChange={(e) => setValues({ ...values, images: e.target.files })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" className="form-control" name="title" value={title} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <select name="category" className="form-select" onChange={handleChange}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" className="form-control"  name="price"  value={price} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <select name="location" className="form-select" onChange={handleChange}>
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option value={location} key={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Contact</label>
        <input type="text" className="form-control" name="contact" value={contact} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea name="description" cols="30" rows="3" className="form-control" value={description} onChange={handleChange}
        ></textarea>
      </div>
      {error ? <p className="text-center text-danger">{error}</p> : null}
      <div className="mb-3 text-center">
        <button className="btn btn-secondary btn-sm" disabled={loading}>
          Create
        </button>
      </div>
    </form>
    </div>
    <Footer></Footer>
    <CommonToastContainer/>
    </>
  );
};

export default PostAd;
