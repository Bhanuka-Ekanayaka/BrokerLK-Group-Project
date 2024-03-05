import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Col, Row } from 'react-bootstrap';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import aboutus from './aboutus.css'
export default function AboutUs() {
  return (

    <>
<div className='contact-body-color'>
    <div className='aboutus-container'>
       
        <div className='about-deteils'>
            <h3>About Us</h3>
        </div>

    </div>

<div className='grid-contacts-container'>
    
    <div className='formcontact'>
         <div className='contact_body'>
         <h3> contactus</h3>
         
      
        </div>  
    </div>
            <div className='contactus'>
             
                    <div className='mail'>

                        


                         <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                            > 
        

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
                                label="Contact"
                                defaultValue=" "
                                
                                variant="filled"
                                />
                            </Col>
                            </Row>

                            <Row className='fields_rows3'>
                                <Col>
                                <TextField
                                id="filled-read-only-input"
                                label="Subject"
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

                            <TextField
                                id="filled-multiline-static"
                                label="Message"
                                multiline
                                rows={4} // Define the number of rows for the text area
                                defaultValue=""
                                variant="filled"
                                />
                             </Box>

         

         
                                    <div className='mailbutton'>
                                            <Stack direction="row" spacing={2}>
                                    <Button variant="coutlined" endIcon={<SendIcon />}>
                                        Send
                                    </Button>
                                    </Stack>
                                    </div>

                     </div>


                            <div className='social-meadia'>
                            <>
                           
      
      <List className='socialicons' >

     
        <ListItemIcon>
          <ListItemButton>
            <FacebookRoundedIcon /> 
          </ListItemButton>
        </ListItemIcon>
        <ListItemIcon>
          <ListItemButton>
            <TwitterIcon />
          </ListItemButton>
        </ListItemIcon>
        <ListItemIcon>
          <ListItemButton>
            <WhatsAppIcon />
          </ListItemButton>
        </ListItemIcon>
        <ListItemIcon>
          <ListItemButton>
            <EmailIcon />
          </ListItemButton>
        </ListItemIcon>
        <ListItemIcon>
          <ListItemButton>
            <LinkedInIcon/>
          </ListItemButton>
        </ListItemIcon>
        <ListItemIcon>
          <ListItemButton>
            <PinterestIcon/>
          </ListItemButton>
        </ListItemIcon>
        <ListItemIcon>
          <ListItemButton>
            <InstagramIcon/>
          </ListItemButton>
        </ListItemIcon>
      </List>
 
</>
                            </div>

                

            </div>

            </div>
            
            </div>   
        </> 
    
  )
}
