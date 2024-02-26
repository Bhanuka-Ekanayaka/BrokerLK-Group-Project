import NavBar from "../Child/NavBar/NavBar";
import Footer from "../Child/Footer/Footer";
import SearchBar from "./Child-SearchBar/SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

import './Rental.css';


const Rental = () => {

    const [postData, setPostData] = useState([]);
    const [newkeyarray,setNewKeyArray]=useState([]);

    const location = useLocation();
    const SearchData = location.state;
    console.log(location,'sending data from the home Searching');


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


    useEffect(()=>{
        const newarry=postData.map(item=>({
            ...item,
            boarding_type:'Boarding Room'
        }))

        setNewKeyArray(newarry)

        // shuffle the array
        console.log(newarry,'new array');

    },[postData])

    return ( 
        <>
            <NavBar/>
            <SearchBar postData={newkeyarray} SearchData={SearchData}/>
          
            <Footer animation="flip-right"/>
        </>
     );
}
 
export default Rental;