import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import PostAd from './Components/PostAd/PostAd';
import ForgotPassword from './Components/Login/ForgotPassword';
import Package from './Components/Package/Package';
import About from './Components/About/About';

import Otpinpu from './Components/Otpinput/Otpinput';
import Welcome from './Components/Welcome/Welcome'

import Otpinput from './Components/Otpinput/Otpinput';

import CreateListingRentalHouse from './Components/PostAd/CreateListingRentalHouse';
import CreateListingBoardingHouse from './Components/PostAd/CreateListingBoardingHouse';
import CreateListingBoardingRoom from './Components/PostAd/CreateListingBoardingRoom';
import BoardingRoom from './Components/PostADDForm/BoardRoom/BoardingRoom';


function App() {

  const [ isAuthenticated, setisAuthenticated  ] = useState(false);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home isAuthenticated={isAuthenticated}/>} />
          <Route path='/packages' element={<Package/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated}/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/postadd' element={<PostAd/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/Otpinput' element={<Otpinpu/>}/>
          <Route path='/Welcome' element={<Welcome/>}/>
          <Route path='/postad' element={<PostAd/>}/>
          <Route path="/create-listing/rental-house" element={<CreateListingRentalHouse />} />
          <Route path="/create-listing/boarding-house" element={<CreateListingBoardingHouse />} />
          <Route path="/create-listing/boarding-room" element={<BoardingRoom />} />

        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
