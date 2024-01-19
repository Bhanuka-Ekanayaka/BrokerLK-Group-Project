import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './PageNavbar.css';

const PageNavbar = () => {
    return (
        <>
            <Navbar className='navar-mypage'>
                <Container>
                    <Nav className='m-auto'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Packages</Nav.Link>
                        <Nav.Link href="#pricing">About us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default PageNavbar;