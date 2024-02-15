import NavBar from "../Child/NavBar/NavBar";
import Footer from "../Child/Footer/Footer";
import SearchBar from "../Home/Child-SearchBar/SearchBar";
import HorizontalCard from "./Child-HorizontalCard/HorozontalCard";
import './Rental.css';

const Rental = () => {

    return ( 
        <>
            <NavBar/>
            <SearchBar/>
            <HorizontalCard/>
          
            <Footer animation="flip-right"/>
        </>
     );
}
 
export default Rental;