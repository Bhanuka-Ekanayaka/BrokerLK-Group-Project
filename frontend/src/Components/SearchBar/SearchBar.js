import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import searchbarCss from './searchbar.module.css'
import React, { useState } from 'react';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import Budgetslider from './budgetslider/Budgetslider';
import Newsearchbar from './navbarsearch/Newsearchbar';


export default function SearchBar() {



    // formwindow....................
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const openWindow = () => {
        setIsWindowOpen(true);
    };

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    //formwindow.....................



    return (
   
      <section className={searchbarCss.searchbar}>
          <div className="secContainer">
               <div className={searchbarCss.homeCard}>
                        <div className='navboder'>
                                <Navbar expand="lg" className="bg-body-tertiary">
                                     <Container className='navboder'>
                               
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav" className='navbut'>
                                            <Nav className="me-auto">

 
                                            

                                                <div >
                                                    <Newsearchbar/>
                                                </div>

                                           

                                                <div className={searchbarCss.formoption}>
                                                    <Form.Select aria-label="Default select example" >
                                                        <option>Search Radious</option>
                                                        <option value="1"> 1 km</option>
                                                        <option value="2"> 2 km</option>
                                                        <option value="3"> 3 km</option>
                                                        <option value="4"> 4 km</option>
                                                        <option value="5"> 5 km</option>
                                                        <option value="6"> 10 km</option>
                                                        <option value="7"> 15 km</option>
                                                        <option value="8"> 20 km</option> 
                                                    </Form.Select>
                                                </div>


                                                <div className={searchbarCss.formoption}>
                                                     <Form.Select aria-label="Default select example" >
                                                        <option>Property Type</option>
                                                        <option value="1">Boarding Rooms</option>
                                                        <option value="2">Rental House</option>
                                                    
                                                     </Form.Select>
                                                </div>

            {/* Formwindow........................................ */}



                                    <div className={searchbarCss.newwindow}>
                                            <div className={searchbarCss.newwindow1}>         
                                      
                    
                                                        <div className={searchbarCss.searchBtn} >
                                                            <div className={searchbarCss.test}>
                                                                <button className={searchbarCss.formbutton1} onClick={openWindow}>  
                                                                    <div className={searchbarCss.icon}>
                                                                        <TuneSharpIcon />
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>

{isWindowOpen && (
        <div className={searchbarCss.window}>
            <div className={searchbarCss.windowform}>
    <form>
            <div className={searchbarCss.windowform1}>
                <div className={searchbarCss.budgetslider}>
                    <label> Budget </label>
                    <Budgetslider/>
                </div>            
            </div>


            <div className={searchbarCss.windowform2}>
                <div className={searchbarCss.maxminbed}>
                    <div className={searchbarCss.maxbed}> <label> Min Bed </label>
                        <div className={searchbarCss.formoption}>
                            <Form.Select aria-label="Default select example" >
                                    <option value="1"> 0</option>
                                    <option value="1"> 1 </option>
                                    <option value="2"> 2 </option>
                                    <option value="3"> 3 </option>
                                    <option value="4"> 4 </option>
                                    <option value="5"> 5 </option>
                                    <option value="6"> 6</option>
                                    <option value="7"> 7</option>
                                    <option value="8"> 8</option>
                                    <option value="7"> 9</option>
                                    <option value="8"> 10</option>   
                            </Form.Select>
                        </div>
                    </div>

                        <div className={searchbarCss.minbed}> <label> Max Bed </label>
                            <div className={searchbarCss.formoption}>
                                <Form.Select aria-label="Default select example" >
                                    <option value="1"> 0 </option>
                                    <option value="1"> 1 </option>
                                    <option value="2"> 2 </option>
                                    <option value="3"> 3 </option>
                                    <option value="4"> 4 </option>
                                    <option value="5"> 5 </option>
                                    <option value="6"> 6</option>
                                    <option value="7"> 7</option>
                                    <option value="8"> 8</option>
                                    <option value="7"> 9</option>
                                    <option value="8"> 10</option>   
                                </Form.Select>
                            </div>
                        </div>
                    </div>      
                </div>

            <div className={searchbarCss.windowform3}>
                <div className={searchbarCss.subbut}>
                    <button  type="submit">Ok</button>
                </div>
                <div className={searchbarCss.clsbut}>
                    <button  onClick={closeWindow}>Close</button>
                </div>
            </div>
    </form>
        </div>
        </div>
                                                                            
)}                                   
        </div>
    </div>

{/* Formwindow........................................ */}
                                       

        <div className={searchbarCss.searchBtn} >
            <button className={searchbarCss.formbutton}>Search</button>
        </div>     


            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
                      </div>                            
                  </div> 
           </div>
      </section> 
    
    )
}

