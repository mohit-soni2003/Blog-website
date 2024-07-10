import NavigationBar from "./Nav"
import { useState } from 'react'
import Card from "./Card"
import FoodImage from "../img/food.jpg"
import "./Home.css";

function Home(){
    return(
        <>
        <NavigationBar></NavigationBar>
        
        <div className="category-container">
        <Card src={FoodImage}></Card>
        <Card src={FoodImage}></Card>
        <Card src={FoodImage}></Card>
        <Card src={FoodImage}></Card>
        <Card src={FoodImage}></Card>
        <Card src={FoodImage}></Card>
      
       
        </div>
        
        </>
    )
}

export default Home;
