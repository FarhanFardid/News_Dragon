import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
           <div className="text-center">
            <img className='p-3' src={logo} alt="logo" />
            <p className='fw-bolder fs-5 p-2'>Journalism Without Fear or Favor</p>
            <p className='fw-bold'>{moment().format('dddd, MMMM Do, YYYY')}</p>

            <div className='d-flex justify-content-center align-items-center p-3'>
            <Button variant="danger  fw-bold">Latest</Button>
            <Marquee  speed={100} className='text-info fs-5' >
                   <p className='text-danger'>Breaking News.........</p> 
           <p> Why US send a stealth submarine to South Korea?........</p> <p className='text-danger'>Breaking News.........</p><p>Solving the mystery of the most powerful objects in the universe.......   </p>    
</Marquee>
            </div>
           </div>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fw-bolder fs-4'>Dragon News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fw-bold">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Career</Nav.Link>
        
          </Nav>
          <Nav>
            <Nav.Link className='fw-bold p-3' href="#">Profile</Nav.Link>
            <Button className='px-4 fw-bold bg-secondary' >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;