import "./HomeC1.css"
import mainpage from "../img/mainpage1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function HomeC1() {
    return (
        <>
            <div className="home-container">

                <div className="slogan-part1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, corrupti! <br /><Button variant="primary" className="Create-blog">Create Blog</Button> <Button variant="primary" className="Explore-blog">Explore Blog</Button></div>

                <div className="slogan-part2"><img src={mainpage} alt="" /></div>
            </div>
        </>
    )
}

export default HomeC1;