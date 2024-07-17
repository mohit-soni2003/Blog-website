
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



import NavigationBar from "./Nav"


function Technology() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  //Toast Function --------- ------ --------- -------

  const notifyA = (msg) => toast.success(msg)
  const notifyB = (msg) => toast.error(msg)

  //fetching all posts of category fashion----- ------ ------ ------

  useEffect(() => {
    const token = localStorage.getItem("jwt")

    if (!token) {
      notifyB("Please Signin to See the blogs")
      navigate("/")
      return
    }
    //Fetch Blogs from server
    fetch("http://localhost:8080/categories/Technology", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
    }).then(res => res.json())
      .then((result) => {
        setData(result)
        // console.log(result)
      })
      .catch(err => console.log(err))


  }, []);
  // console.log(data)

  return (

    <>
      
      {/*cards*/}
      {data.map((blogs) => {console.log(blogs)
        return(
        <Card style={{ width: '22rem', height: '35rem' }} className='category-card'>
          <Card.Img variant="top" src={blogs.image} />
          <Card.Body >
            <Card.Title>{blogs.title}</Card.Title>
            <Card.Text>
              {blogs.description}
            </Card.Text>

            <h6 style={{ color: "red" }}>{blogs.content}</h6>
          </Card.Body>
        </Card>
        )

      })}


    </>
  )
}

export default Technology;