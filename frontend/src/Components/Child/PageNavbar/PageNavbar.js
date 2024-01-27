import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './PageNavbar.css';

const PageNavbar = () => {
    return (
        <div className="hide-navbar">
            <Navbar className='navar-mypage'>
                <Container>
                    <Nav className='m-auto'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/packages">Packages</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}

export default PageNavbar;