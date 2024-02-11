import NavBar from "../Child/NavBar/NavBar";
import Footer from "../Child/Footer/Footer";
import SearchBar from "../Home/Child-SearchBar/SearchBar";
const Rental = () => {

    return ( 
        <>
            <NavBar/>
            <SearchBar/>
            <Footer animation="flip-right"/>
        </>
     );
}
 
export default Rental;