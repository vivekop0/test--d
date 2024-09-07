
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'; 
 
 import logo from '../assets/Header-Logo-2.png'

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Royalty Jackets Logo"
            height="40" // Adjust the size based on design
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="/" className="custom-nav-link">Home</Nav.Link>
            <Nav.Link href="/shop" className="custom-nav-link">Shop</Nav.Link>

            {/* Dropdown for Design Your Jacket */}
            <NavDropdown title="Design Your Jacket" id="navbarScrollingDropdown" className="custom-nav-link">
              <NavDropdown.Item href="/design">Design Options</NavDropdown.Item>
              <NavDropdown.Item href="/design/custom">Custom Design</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/bulk-orders" className="custom-nav-link">Bulk Orders</Nav.Link>
            <Nav.Link href="/about-us" className="custom-nav-link">About Us</Nav.Link>
            <Nav.Link href="/guides" className="custom-nav-link">Guides</Nav.Link>
            <Nav.Link href="/blog" className="custom-nav-link">Blog</Nav.Link>
            <Nav.Link href="/contact-us" className="custom-nav-link">Contact Us</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex search-form">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-input"
              aria-label="Search"
            />
          </Form>

          {/* Cart and Profile Icons */}
          <Nav className="icons-nav">
            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Nav.Link>
            <Nav.Link href="/profile">
              <i className="fas fa-user"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
