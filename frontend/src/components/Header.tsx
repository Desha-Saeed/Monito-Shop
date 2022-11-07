import React from 'react';
//import styles
import { Container, Nav, Navbar } from 'react-bootstrap';
//import route
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Navbar
          bg='primary'
          variant='dark'
          expand='lg'
          collapseOnSelect>
          <Container>
            <Navbar.Brand
              as={Link}
              to={'/'}>
              MONITO SHOP
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
              id='basic-navbar-nav'
              className='justify-content-end'>
              <Nav className='ml-auto'>
                <Nav.Link
                  as={Link}
                  to={'/login'}
                  className='px-4'>
                  {' '}
                  <i className='fas fa-user'></i> Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/cart'}
                  className='px-4'>
                  {' '}
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </header>
  );
}

export default Header;
