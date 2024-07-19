
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fashion.css'
import Card from 'react-bootstrap/Card';
import Blog from "./Blog"



import NavigationBar from "./Nav"


function Fashion() {

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
    fetch("http://localhost:8080/categories/fashion", {
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

  const visitBlog =async(id)=>{
    const response = await fetch(`http://localhost:8080/blog/${id}`)
    const blogData =await response.json()
    console.log(blogData)

    navigate("/blog", { state: { blogData } });
  }

  return (

    <>

      {/*cards*/}
      {data.map((blogs) => {
        console.log(blogs)
        return (
          <div id={blogs._id} onClick={()=>visitBlog(blogs._id)}>
            <Card style={{ width: '22rem', height: '35rem' }} className='category-card' >
              <Card.Img variant="top" src={blogs.image} className="cat-image" />
              <Card.Body >
                <Card.Title>{blogs.title}</Card.Title>
                <Card.Text>
                  {blogs.description}
                </Card.Text>

              </Card.Body>
            </Card>
          </div>


        )

      })}



    </>
  )
}

export default Fashion;