import React, { useEffect } from 'react'
import profilepagecomponent from './profilepagecomponent.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Col, Row } from 'react-bootstrap';
import { useState } from "react";
import unkownprofile from './ProfileImages/unkownprofile.jpg';
import axios from 'axios';
import Usertoken from '../../Services/token.userToken';





export default function ProfilePageComponent() {

  const [edit, setEdit] = useState(true);
  const userdetails = Usertoken();

  const [username, setUserName] = useState(userdetails.userid);
  const [results, setResults] = useState();
  console.log('userid of the user');

  const fetchData = async (userid) => {
    try {
      const response = await axios.get(`http://localhost:5001/profile/showdetails/${userid}`);
      setResults(response.data.profileData[0]);
    } catch (err) {
      console.log("Cannot fetch the the data" + err);
    }
  }

  useEffect(() => {
    console.log(results);
  }, [results])

  useEffect(() => {
    fetchData(username);
  }, [username])

  console.log('details:' + results);

  return (

    <>
      {
        Array.isArray(results) && (
          <div className='content_profilepage'>
            <div className='user_profile'>
              <div className='grid-container'>

                <div className='profileimage-item'>

                  <div className='userprofileimage'>
                    <div className='imgcontainerprofile'>
                      <div className='imgbx4'>
                        <img src={unkownprofile} alt="ProfileImage" />
                      </div>
                    </div>
                    <div className='profile_details'>

                      <h4>{results[0].Email}</h4>
                      <h6>{results[0].contact_number}</h6>
                    </div>
                  </div>


                </div>

                <div className='userdetails-item'>

                  {edit ?
                    <Box
                      component="form"

                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <Row className='fields_rows1'>

                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="First Name"
                            defaultValue={results[0].fname}
                            InputProps={{
                              readOnly: true,

                            }}
                            variant="filled"
                          />
                        </Col>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="Last Name"
                            defaultValue={results[0].lname}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="filled"
                          />
                        </Col>
                      </Row >

                      <Row className='fields_rows2'>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="User Name"
                            defaultValue={results[0].Username}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="filled"
                          />
                        </Col>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="E-mail"
                            defaultValue={results[0].Email}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="filled"
                          />
                        </Col>
                      </Row>

                      <Row className='fields_rows3'>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="Contact"
                            defaultValue={results[0].contact_number}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="filled"
                          />
                        </Col>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="City"
                            defaultValue={results[0].city}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="filled"
                          />
                        </Col>
                      </Row>
                    </Box>


                    :

                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <Row className='fields_rows1'>

                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="First Name"
                            defaultValue={results[0].fname}
                            // InputProps={{
                            //   readOnly: true,

                            // }}
                            variant="filled"
                          />
                        </Col>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="Last Name"
                            defaultValue={results[0].lname}

                            variant="filled"
                          />
                        </Col>
                      </Row >

                      <Row className='fields_rows2'>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="User Name"
                            defaultValue={results[0].Username}

                            variant="filled"
                          />
                        </Col>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="E-mail"
                            defaultValue={results[0].Email}

                            variant="filled"
                          />
                        </Col>
                      </Row>

                      <Row className='fields_rows3'>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="Contact"
                            defaultValue={results[0].contact_number}

                            variant="filled"
                          />
                        </Col>
                        <Col>
                          <TextField
                            id="filled-read-only-input"
                            label="City"
                            defaultValue={results[0].city}

                            variant="filled"
                          />
                        </Col>
                      </Row>
                    </Box>



                  }

                  <Button onClick={() => setEdit(false)}>Edit</Button>
                  <Button >Save</Button>
                </div>

              </div>
            </div>
          </div>
        )
      };
    </>

  )
}
