import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Components/Child/NavBar/Navbar.css';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import Package from './Components/Package/Package';
import About from './Components/About/About';

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
        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
