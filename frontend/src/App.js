import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useContext } from "react";
import Home from "./Components/Home/Home";
import Rental from "./Components/Rental/Rental";
import BoardingRoom from "./Components/PostADDForm/BoardRoom/BoardingRoom";
import Cdescription from "./Components/Description/Cdescription";
import TenentComponenet from "./Components/DashBoard/Tenent/TenentComponenet";
import RegisterPage from "./pages/Register/Register";
import LoginPage from "./pages/Login/Login";
import BoardingBuilding from "./Components/PostADDForm/BoardingBuilding/BoardingBuilding";
import RentalHouse from "./Components/PostADDForm/RentalHouse/RentalHouse";
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
              <Route
                path="/create-listing/boarding-room"
                element={<BoardingRoom />}
              />
              <Route
                path="/create-listing/boarding-building"
                element={<BoardingBuilding />}
              />
              <Route
                path="/create-listing/rental-house"
                element={<RentalHouse />}
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
