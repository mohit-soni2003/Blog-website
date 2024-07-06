

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  return (
<>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Website Title</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Blogs</Nav.Link>
            <NavDropdown title="Get Started" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Start Writing</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              About Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
             Help
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
            <span class="material-symbols-outlined">
notifications
</span>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Blogs"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  );
}

