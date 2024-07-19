
import React, { useState, useEffect ,useContext } from 'react';
import "./Nav.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { LoginContext } from '../context/LoginContext';
import profile from "../img/profile.png"
import { Link } from 'react-router-dom';



const searchTexts = [
  'Search for the latest Blogs!',
  'Find insightful blogs!',
  'Explore Your Interest! ',
  'What are you curious about today!',
];

export default function NavigationBar({login}) {
  const {setmodalopen} = useContext(LoginContext)
  const navigate = useNavigate()
  const token = localStorage.getItem("jwt")

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  
  const logoutButtonStatus = () => {
    if (token || login) {
      return (
        <>
          <Button variant="danger mx-4" onClick={()=>{setmodalopen(true)}}>Logout</Button>

        <Link to="/profile">
          <div className="profile-icon"><img src={profile} alt="" /></div>
        </Link>
        </>
      )
    }

  }
  const navigationStatus = () => {
    if (!token ) {

      return (
        <>
          <LinkContainer to="/signin">
            <Nav.Link>Signin</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/signup">
            <Nav.Link>Signup</Nav.Link>
          </LinkContainer>

        </>
      )
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % searchTexts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"><div className='nav-title'>Blog Aura</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>



              <LinkContainer to="/allblogs">
                <Nav.Link >
                  Blogs
                </Nav.Link>
              </LinkContainer>

              {navigationStatus()}


              <NavDropdown title="Get Started" id="navbarScrollingDropdown">

                <LinkContainer to="/createblog">
                  <NavDropdown.Item>Start Writing</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#action4">About Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Help</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                <span className="material-symbols-outlined">notifications</span>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder={searchTexts[currentTextIndex]} // Dynamically update placeholder
                className="me-2 "
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
          {logoutButtonStatus()}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}



