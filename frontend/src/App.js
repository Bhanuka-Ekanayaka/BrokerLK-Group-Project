import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Components/Child/NavBar/Navbar.css';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import Sell from './Components/Seller/Sell';
import ForgotPassword from './Components/Login/ForgotPassword';
import Package from './Components/Package/Package';
import About from './Components/About/About';
import Otpinput from './Components/Otpinput/Otpinput';
import Welcome from './Components/Welcome/Welcome'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/packages' element={<Package/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/seller' element={<Sell/>}/>
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/Otpinput' element={<Otpinput/>}/>
          <Route path='/Welcome' element={<Welcome/>}/>
        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
