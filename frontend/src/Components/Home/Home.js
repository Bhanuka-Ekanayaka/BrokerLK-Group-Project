import NavBar from '../Child/NavBar/NavBar';
import SlideShow from '../Child/SlideShow/SlideShow';
import Catergory from './Child-Catergory/Catergory';
import { showSuccessToast, showErrorToast, CommonToastContainer } from '../../Services/CommonToaster';
import AutoLayout from '../Card/AutoLayout';
import './home.css';
import SearchBar from './Child-SearchBar/SearchBar';
import Cards from './Child-Card/Cards';
import Footer from '../Child/Footer/Footer';

const Home = ({isAuthenticated}) => {




  

  return (
    <>
      <NavBar/>
      <SlideShow/>
      <Catergory />
      <SearchBar />
      <Cards title='Boarding Building' animation='flip-right' CardAnimate='flip-down' type='boarding-room'/>
      <Cards title='Rental Houses'  animation='flip-left' CardAnimate='flip-up' type='boarding-room' />
      <Cards title='Boarding Rooms'  animation='flip-right' CardAnimate='flip-down' type='boarding-room'/>
      <Footer animation="flip-right"/>
    </>
  );
}

export default Home;