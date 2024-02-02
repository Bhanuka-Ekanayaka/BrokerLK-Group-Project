import NavBar from '../Child/NavBar/NavBar';
import SlideShow from '../Child/SlideShow/SlideShow';
import { showSuccessToast, showErrorToast, CommonToastContainer } from '../../Services/CommonToaster';
import AutoLayout from '../Card/AutoLayout';
import './home.css';


const Home = ({isAuthenticated}) => {

  return (
    <>
      <NavBar/>
      <SlideShow/>
   
    </>
  );
}

export default Home;