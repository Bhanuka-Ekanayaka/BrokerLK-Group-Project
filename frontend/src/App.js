import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Rental from "./Components/Rental/Rental";
import PostAd from "./Components/PostAdCategory/PostAd";
import ForgotPassword from "./Components/Login/ForgotPassword";
import About from "./Components/About/About";
import Otpinpu from "./Components/Otpinput/Otpinput";
import Welcome from "./Components/Welcome/Welcome";
import BoardingRoom from "./Components/PostADDForm/BoardRoom/BoardingRoom";
import BoardingHouse from "./Components/PostADDForm/BoardHouse/BoardingHouse";
import RentalHouse from "./Components/PostADDForm/RentalHouse/RentalHouse";
import Cdescription from "./Components/Description/Cdescription";
import { UserProvider } from "./Services/userContextServics";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateAuthentication = (value) => {
    setIsAuthenticated(value);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
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
          <Route path="/register" element={<Register />} />
          <Route path="/register/:id" element={<Register />} />
          <Route path="/postadd" element={<PostAd />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/Otpinput" element={<Otpinpu />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/postad" element={<PostAd />} />
          <Route
            path="/create-listing/boarding-room"
            element={<BoardingRoom />}
          />
          <Route
            path="/create-listing/boarding-house"
            element={<BoardingHouse />}
          />
          <Route
            path="/create-listing/rental-house"
            element={<RentalHouse />}
          />
          <Route path="/Description" element={<Cdescription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
