import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Rental from "./Components/Rental/Rental";
import PostAd from "./Components/PostAd/PostAd";
import ForgotPassword from "./Components/Login/ForgotPassword";

import About from "./Components/About/About";

import Otpinpu from "./Components/Otpinput/Otpinput";
import Welcome from "./Components/Welcome/Welcome";

import Otpinput from "./Components/Otpinput/Otpinput";

import CreateListingRentalHouse from "./Components/PostAd/CreateListingRentalHouse";
import CreateListingBoardingHouse from "./Components/PostAd/CreateListingBoardingHouse";
import CreateListingBoardingRoom from "./Components/PostAd/CreateListingBoardingRoom";
import BoardingRoom from "./Components/PostADDForm/BoardRoom/BoardingRoom";
import Cdescription from "./Components/Description/Cdescription";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateAuthentication = (value) => {
    setIsAuthenticated(value);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setIsAuthenticated(!!storedToken);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home updateAuthentication={updateAuthentication} />}
          />
          <Route path="/rental-post" element={<Rental />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={<Login updateAuthentication={setIsAuthenticated} />}
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Description" element={<Cdescription />} />
          {isAuthenticated ?
            <>
              <Route path="/postadd" element={<PostAd />} />
              <Route path="/Otpinput" element={<Otpinpu />} />
              <Route path="/Welcome" element={<Welcome />} />
              <Route path="/postad" element={<PostAd />} />
              <Route
                path="/create-listing/rental-house"
                element={<CreateListingRentalHouse />}
              />
              <Route
                path="/create-listing/boarding-house"
                element={<CreateListingBoardingHouse />}
              />
              <Route
                path="/create-listing/boarding-room"
                element={<BoardingRoom />}
              />
            </>
            :
            <>
            </>}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
