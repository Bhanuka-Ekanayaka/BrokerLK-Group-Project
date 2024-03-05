import React from 'react'
import Bills from './Bills'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Col, Row } from 'react-bootstrap';
import { useState } from "react";
import tenent from './tenent.css'



export default function TenentComponenet() {
  const [edit,setEdit]=useState(true);
  return (

  <> 

<div  className='flex-container'>
            
    <div className='billsteps'><Bills/>  </div>
    <div className='billsteps'><Bills/> </div>       
    <div className='billsteps'><Bills/> </div>
    <div className='billsteps'><Bills/> </div> 
 </div>

 <div className='tenet-form'>



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

 </>
  )
}
