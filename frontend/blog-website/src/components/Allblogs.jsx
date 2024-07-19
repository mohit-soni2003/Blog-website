import React, { useEffect, useState } from 'react'
import Card from "./Card"




export default function Allblogs() {
    const [blogs, setblog] = useState()
    useEffect(() => {
        fetch("http://localhost:8080/allblogs", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
        }).then(res => res.json())
            .then((result) => {
                setblog(result)
                console.log(result)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className="category-blog-container">

                {/*cards*/}
                {data.map((blogs) => {
                    console.log(blogs)
                    return (
                        <div id={blogs._id} onClick={() => visitBlog(blogs._id)}>
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
