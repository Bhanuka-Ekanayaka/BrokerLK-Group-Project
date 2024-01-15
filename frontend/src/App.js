import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import './App.css'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import Sell from './Components/Seller/Sell';
import ForgotPassword from './Components/Login/ForgotPassword';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/seller' element={<Sell/>}/>
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
