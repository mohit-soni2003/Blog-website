import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export default function Allblogs() {

  const navigate = useNavigate()
  const [userid, setuserid] = useState()

  useEffect(() => {
    const tempuserid  = JSON.parse(localStorage.getItem("user"))._id;
    setuserid(tempuserid)
    console.log(userid)
    console.log(userid)
    
  }, [])
  
  console.log(userid)
  //LikePost.. ...... ..... .....

  const likePost = (id) => {
    fetch("http://localhost:8080/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        blogid: id   //same variable name as in like route
      })
    }).then(res => res.json()).
      then((result) => {
        const newData = data.map((posts)=>{
          if(blogs._id==result._id){
            return result;
          }
          else{
            posts
          }
        })
        setdata(newData)
        console.log(result)
      })
  }
  const unlikePost = (id) => {
    fetch("http://localhost:8080/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        blogid: id   //same variable name as in like route
      })
    }).then(res => res.json()).
      then((result) => {
        const newData = data.map((posts)=>{
          if(blogs._id==result._id){
            return result;
          }
          else{
            posts
          }
        })
        setdata(newData)
        console.log(result)
      })
  }


  /// Fetching all the blogs------- -------- ---- 
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/allblogs")
      .then(res => res.json())
      .then((result) => {
        setdata(result)
      })
      .catch(err => console.log(err))
    console.log(data)
  }, [data])



  // code to visit each blog on click

  const visitBlog = async (id) => {
    const response = await fetch(`http://localhost:8080/blog/${id}`)
    const blogData = await response.json()
    console.log(blogData)

    navigate("/blog", { state: { blogData } });
  }
  return (
    <>
      <div className="category-blog-container">

        {/*cards*/}
        {data.map((blogs) => {
          console.log(blogs)
          return (
            <div key={blogs._id} id={blogs._id}>
              <Card className="category-card">
                <div className="cat-image">
                  <Card.Img onClick={() => visitBlog(blogs._id)} variant="top" src={blogs.image} />
                </div>
                <Card.Body >
                  <Card.Title>{blogs.title}</Card.Title>
                  <Card.Text className="cat-card-desc" style={{ height: "100px", overflow: "hidden" }}>
                    {blogs.description}
                  </Card.Text>

                  <div className="likes-icon">
                  {
                    blogs.likes.includes(userid)
                    ?(<i class="bi bi-heart-fill" onClick={() =>{unlikePost(blogs._id)}} style={{ fontSize: "25px", color: "red" }}></i>)
                    :(<i class="bi bi-heart" onClick={() =>{likePost(blogs._id)}} style={{ fontSize: "25px" }}></i>)
                  }
                  </div>

                  <div className="likes"> {blogs.likes.length} Likes </div>
                </Card.Body>
              </Card>
            </div>


          )

        })}

      </div>


    </>
  )
}