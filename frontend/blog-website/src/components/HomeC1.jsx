import React, { useState, useEffect } from 'react';
import './HomeC1.css';
import mainpage from '../img/mainpage1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function HomeC1() {
  const navigate = useNavigate()
  const [typedText, setTypedText] = useState(''); // Manage typed text state

  useEffect(() => {
    const text = "Write, rewrite, and publish! Let your voice be heard.";
    const speed = 100;

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setTypedText(typedText + text.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };


  }, []); 

  return (
    <>
      <div className="home-container" id='home-category'>
        <div className="slogan-part1">
          <h1 className="slogan">Write, rewrite, and publish! Let your voice be heard."</h1>
          <br />
          <Button variant="primary" onClick={()=>{navigate("/createblog")}} className="Create-blog">
            Create Blog
          </Button>
          <Button variant="primary" className="Explore-blog">
          <HashLink smooth style={{ textDecoration: "none", color:"white" }} to="/#home-category">Explore Blogs
          </HashLink>
          </Button>
        </div>
        <div className="slogan-part2">
          <img src={mainpage} alt="" />
        </div>
      </div>
    </>
  );
}

export default HomeC1;
