
import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from "react-router-dom";
function CategoryCard(props){
    return(

         <Card style={{ width: '22rem' }} className='category-card'>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/food">Visit here</Link>
      </Card.Body>
    </Card>
       

    )
}

export default CategoryCard;