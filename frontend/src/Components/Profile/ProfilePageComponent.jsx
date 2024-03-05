import React from 'react'
import profilepagecomponent from './profilepagecomponent.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Col, Row } from 'react-bootstrap';
import { useState } from "react";
import unkownprofile from './ProfileImages/unkownprofile.jpg'



export default function ProfilePageComponent() {
    
const [edit,setEdit]=useState(true);
  return (

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
                    <h4>@user</h4>
                    {/* <h6>sanjeewasandun82@gmail.com</h6> */}
                    <h6>+94xx xxx xx xx</h6>
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
                  defaultValue=" "
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
                  defaultValue=" "
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
                  defaultValue=" "
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
                  defaultValue=" "
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
                  defaultValue=" "
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
                  defaultValue=" "
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
                  defaultValue=" "
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
                  defaultValue=" "
                
                  variant="filled"
                />
               </Col> 
             </Row > 

             <Row className='fields_rows2'>
              <Col>
                <TextField
                  id="filled-read-only-input"
                  label="User Name"
                  defaultValue=" "
                 
                  variant="filled"
                />
              </Col>
              <Col>
                <TextField
                  id="filled-read-only-input"
                  label="E-mail"
                  defaultValue=" "
                 
                  variant="filled"
                />
              </Col>
              </Row>

              <Row className='fields_rows3'>
                <Col>
                <TextField
                  id="filled-read-only-input"
                  label="Contact"
                  defaultValue=" "
                 
                  variant="filled"
                />
                </Col>
                <Col>
                <TextField
                  id="filled-read-only-input"
                  label="City"
                  defaultValue=" "
                
                  variant="filled"
                />
                </Col>
              </Row>
          </Box>



}

<Button onClick={()=>setEdit(false)}>Edit</Button>
<Button >Save</Button>
            </div>

        </div>
    </div>    
</div>
  )
}
