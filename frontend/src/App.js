import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useContext } from "react";
import Home from "./Components/Home/Home";
import Rental from "./Components/Rental/Rental";
import PostAd from "./Components/PostAd/PostAd";
import CreateListingRentalHouse from "./Components/PostAd/CreateListingRentalHouse";
import CreateListingBoardingHouse from "./Components/PostAd/CreateListingBoardingHouse";
import BoardingRoom from "./Components/PostADDForm/BoardRoom/BoardingRoom";
import Cdescription from "./Components/Description/Cdescription";
import TenentComponenet from "./Components/DashBoard/Tenent/TenentComponenet";
import RegisterPage from "./pages/Register/Register";
import LoginPage from "./pages/Login/Login";
import { AuthContext } from "./Context/AuthContext";

function App() {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/rental-post" element={<Rental />} />
          <Route path="/Description" element={<Cdescription />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {currentUser ?
            <>
              <Route path="/postadd" element={<PostAd />} />

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
              <Route path="/dashboard/tenent" element={<TenentComponenet />} />

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
