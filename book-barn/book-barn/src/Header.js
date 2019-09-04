import React, {Component} from 'react';
import { Navbar,Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BookBarn</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#mybooks">My Books</Nav.Link>
              <Nav.Link href="#Languages">Languages</Nav.Link>
            </Nav>
          </Navbar>
        );
    }
}

export default Header;