import NavBar from "../Child/NavBar/NavBar";
import Footer from "../Child/Footer/Footer";
import SearchBar from "../Home/Child-SearchBar/SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import './Rental.css';

const Rental = () => {

    const [postData, setPostData] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            try {
                //getting the all boarding-rooms
                const postAddData = await axios.get('http://localhost:5001/postadd/boarding-room');
                console.log('fetch the data from the backend', postAddData.data)
                setPostData(postAddData.data.postData[0]);

                //getting all boarding building

                //geting all rental houses

                //adding new key to the all arrays

                //cancaternate all 3 arrays

                //shuffle the array elements 
               
            } catch (err) {
                console.log('Cannot fetch data from the backend' + err);
            }
        }
        fetchData();
    }, [])


    return ( 
        <>
            <NavBar/>
            <SearchBar postData={postData}/>
          
            <Footer animation="flip-right"/>
        </>
     );
}
 
export default Rental;