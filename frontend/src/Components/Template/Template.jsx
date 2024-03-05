import * as React from 'react';
import Footer from "../Child/Footer/Footer";
import template from './template.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

import logo from './TemplateImages/logo.png';

import ProfilePageComponent from '../Profile/ProfilePageComponent';
import { Button } from 'react-bootstrap';
import AboutUs from '../About/AboutUs';
import DashBoardComponent from '../DashBoard/DashBoardComponent';
import TenentComponenet from '../DashBoard/Tenent/TenentComponenet';






const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
 
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));





export default function Template (props) {

    const page = props.page;
    let pageComponent;
    let pagename;


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };
      const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

      switch (page) {
        case 0:
            pageComponent = <ProfilePageComponent/>;
            break;
    
        case 1:
            pageComponent = <AboutUs/>;
        
            break;
    
        case 2:
            pageComponent = <DashBoardComponent/>;
      
            break;

        case 3:
            pageComponent = <TenentComponenet/>;
        
            break;
          
        
     
        default:
            pageComponent = null;
            break;
    }
    

  return (
    
<>
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
            <AppBar position="fixed" open={open} style={{backgroundColor:' whitesmoke'}} >
                
                  <>
                    <Navbar expand="lg" className="bg-body-tertiary" style={{width:"100%"}}>
                        <Container>
                            <IconButton onClick={toggleDrawer(true)}><MenuIcon />  </IconButton>
                                 <Navbar.Brand as={Link} to="/">

                                    <img
                                        alt=""
                                        src={logo}
                                        width="40"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />{'BrokerLk'}

                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse  id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/rental-post">Rental</Nav.Link>
                                        <NavDropdown title="Account" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/dashboard"> DashBoard</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item as={Link} to="/login">Log Out</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav >
                                      <Button>Post Add</Button>
                                    </Nav>
                                </Navbar.Collapse>
                        </Container>
                    </Navbar>


                    </>
        


      
        
            </AppBar>          
    {/* <Drawer open={open} onClose={toggleDrawer(false)}> */}
    <Drawer 
    
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >


        
        <DrawerHeader>
        <div className='imgcontainer'>
        <div className='imgbx3'>
        <img src={logo} alt="ProfileImage" />
        </div>
        </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

       
        

        <List>
            {['Home', 'Profile', 'DashBoard','About'].map((text, index) => {
            let iconComponent;
                switch (index) {
                case 0:
                    iconComponent = <HomeRoundedIcon />;
                    break;
                case 1:
                
                    iconComponent =  <PersonRoundedIcon />;
                    break;
                case 2:
                    iconComponent = <DashboardRoundedIcon/>;
                    break;
                case 3:
                    iconComponent = <InfoRoundedIcon />;
                    break;

                
                }

                return (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        {iconComponent}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                );
            })}
        </List>

       

        <Divider style={{ marginTop: '50px' }}/>


        <List >
              
        <ListItemIcon>
            <ListItemButton>
                   {/* <FacebookRoundedIcon />  */}
            </ListItemButton>
            </ListItemIcon>

            <ListItemIcon>
            <ListItemButton>
                    {/* <TwitterIcon /> */}
             </ListItemButton>
            </ListItemIcon>

            <ListItemIcon>
            <ListItemButton>
                    {/* <WhatsAppIcon /> */}
            </ListItemButton>
            </ListItemIcon>

            <ListItemIcon>
            <ListItemButton>
                {/* <EmailIcon /> */}
            </ListItemButton>
            </ListItemIcon>            
        </List>


        <Divider />
    </Drawer>
   

    <Main open={open} style={{backgroundColor:' white'}}> 

   
             {pageComponent}   
    <div className='footerposition'>
            <Footer/>
    </div>
    </Main>
    </Box>

</>

  )
}





