import NavBar from '../Child/NavBar/NavBar';
import SlideShow from '../Child/SlideShow/SlideShow';
import Catergory from './Child-Catergory/Catergory';
import './home.css';
import SearchBar from './Child-SearchBar/SearchBar';
import Cards from './Child-Card/Cards';
import Footer from '../Child/Footer/Footer';




const Home = () => {

  return (
    <>
      <NavBar/>
      <SlideShow/>
      <Catergory />
      <SearchBar />
      <Cards title='Boarding Rooms' animation='flip-right' CardAnimate='flip-down' type='boarding-room'/>
      <Cards title='Rental Houses'  animation='flip-left' CardAnimate='flip-up' type='rental-house' />
      <Cards title='Boarding Building'  animation='flip-right' CardAnimate='flip-down' type='boarding-building'/>
      <Footer animation="flip-right"/>
    </>
  );
}

export default Home;