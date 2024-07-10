
import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoryCard(props){
    return(
        <Link to={`./${props.route}` } className="text-decoration-none">
         <Card style={{ width: '22rem', height:'30rem' }} className='category-card'>
      <Card.Img variant="top" src={props.src} />
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
      { props.description}
        </Card.Text>
       
      

      </Card.Body>
    </Card>
    </Link>
    
       

    )
}

export default CategoryCard;