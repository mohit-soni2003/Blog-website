import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export default function Allblogs() {

    const navigate = useNavigate()

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
    }, [])



    // code to visit each blog on click

    const visitBlog =async(id)=>{
        const response = await fetch(`http://localhost:8080/blog/${id}`)
        const blogData =await response.json()
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
                <div key={blogs._id} id={blogs._id} onClick={() => visitBlog(blogs._id)}>
                  <Card className="category-card">
                    <div className="cat-image">
                      <Card.Img variant="top" src={blogs.image} />
                    </div>
                    <Card.Body >
                      <Card.Title>{blogs.title}</Card.Title>
                      <Card.Text className="cat-card-desc">
                        {blogs.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
    
    
              )
    
            })}
    
          </div>
    
    
        </>
      )
}
