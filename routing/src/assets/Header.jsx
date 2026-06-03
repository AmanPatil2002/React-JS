import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand to="/"><img src='./images/logo.png' alt=''/></Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/">HOME</Link>
            <Link to="/About">ABOUT</Link>
            <Link to="/Product">PRODUCTS</Link>
            <Link to="/Blog">BLOG</Link>
            <Link to="/Singlepost">SINGLE POST</Link>
            <Link to="/Contact">CONTACT</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
