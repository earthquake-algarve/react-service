import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MagnifyingGlass, ShoppingCart, Login, CheckoutIcon } from '../../Icons'



export default function Header() {
    return (
      <>
          <Container fluid className='container'>
              {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
                  <Navbar key={expand}  expand={expand} className="navbar-custom" variant='light' fixed='top'>
                      <Link to="/" id='logo'>LOGO </Link>
                      <Link id='search'><MagnifyingGlass /></Link>
                      <Link to="/shoppingcart" id='shoppingcart'><ShoppingCart /></Link>
                      <Link to="/checkout" id='checkout'><CheckoutIcon /></Link>
                      <Link to="/login" id='login'><Login /></Link>
                      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                      <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                      >
                          <Offcanvas.Header closeButton>
                              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                              LOGO
                              </Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                              <Nav className="justify-content-end flex-grow-1 pe-3">
                                  <Link to="/news" id='news'>News</Link>
                                  <Link to="/about" id='about'>About</Link>
                                  <Link to="/contact" id='contact'>Contact</Link>
                              </Nav>
                          </Offcanvas.Body>
                      </Navbar.Offcanvas>
          
                  </Navbar>
        ))}
  
          </Container>
              
      </>
    );
  }