import NavigationBar from "./Nav"
import { useState } from 'react'
import Card from "./Card"
import FoodImage from "../img/food.png"
import SportsImage from "../img/sports.jpg"
import FashionImage from "../img/fashion.jpg"
import TravelImage from "../img/travel.jpg"
import TechnologyImage from "../img/Technology.jpg"
import EntertainmentImage from "../img/Entertainment.jpg"
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <NavigationBar></NavigationBar>

            <div className="category-container">
            <Card src={FashionImage } route="fashion" title="Fashion & Beauty" description="Fashion for Everyone! Outfit ideas and styling tips await! Stay on top of clothing trends with our fashion blog. Discover styles for every you. (Click to explore)"></Card>
            <div >
                <h1> Categories </h1>
                <div className="category-container">
                    <Card src={FashionImage} route="fashion" title="Fashion & Beauty" description="Fashion for Everyone! Outfit ideas and styling tips await! Stay on top of clothing trends with our fashion blog. Discover styles for every you. (Click to explore)"></Card>
                    <Card src={FoodImage} route="food" title="Food" description="Explore a World of Flavors. Dive into a world of culinary creations. Click here to embark on a delicious journey with our food blog, filled with easy-to-follow recipes and inspiring ideas."></Card>

                    <Card src={SportsImage} route="sports" title="Sports Fitness & Wellness" description="Game On! Click here to explore our extensive sports blog category. Discover breaking news, analysis, and features on a variety of sports, keeping you in the loop with the latest happenings." ></Card>

                    <Card src={TravelImage} route="travel" title="Travel" description="Unforgettable Adventures Await! Explore our travel blog for destination guides, travel tips, and inspiring stories to fuel your wanderlust. (Click to explore)"></Card>
                    <Card src={EntertainmentImage} route="Entertainment" title="Entertainment" description=" Unpacking the latest releases, uncovering hidden gems, and sparking discussions about your favorite movies, music, and shows. (Click to join the conversation)"></Card>
                    <Card src={TechnologyImage} route="Technology" title="Technology" description="Power of Technology! Discover innovative gadgets, in-depth reviews, and practical tips to enhance your life and work with technology. (Click to learn more)"></Card>

                </div>

            </div>

        </>
    )
}

export default Home;
