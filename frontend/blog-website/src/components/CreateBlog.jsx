import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './CreateBlog.css';
import NavigationBar from "./Nav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function CreateBlog() {
    const navigate = useNavigate()


    // State Variables -------------------------------

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=")
    const [author, setAuthor] = useState("mohit")
    const [views, setViews] = useState("0")
    const [like, setLike] = useState("0")
    const [categories, setCategories] = useState("")

    let handleTitleChange = (event) => {
        console.log(event.target);
        setTitle(event.target.value)
    };
    let handleDescriptionChange = (event) => {
        console.log(event.target);
        setDescription(event.target.value)
    };
    let handleContentChange = (event) => {
        console.log(event.target);
        setContent(event.target.value)
    };
    let handleImageChange = (event) => {
        console.log(event.target);
        setImage(event.target.value)
    };
    let handleAuthoChange = (event) => {
        console.log(event.target);
        setAuthor(event.target.value)
    };
    let handleViewsChange = (event) => {
        console.log(event.target);
        setViews(event.target.value)
    };
    let handleLikeChange = (event) => {
        console.log(event.target);
        setLike(event.target.value)
    };
    let handleCategoriesChange = (event) => {
        console.log(event.target);
        setCategories(event.target.value)
    };

    //   ----------handling image preview -----------------

    const loadImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }

    }


    // ------------Blog posting to server-----------------

    const postData = () => {
        
        console.log(title, description, content, image, author, views, like, categories)

        fetch("http://localhost:8080/createblog",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    content: content,
                    image: image,
                    author: author,
                    views: views,
                    categories: categories
                })
            }
        ).then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    notifyA(data.message)
                    navigate("/")
                }
                if (data.error) {
                    notifyB(data.error)
                }
            })

        // Toast Function ----------- ---------- --------- -------
        const notifyA = (msg) => toast.success(msg)
        const notifyB = (msg) => toast.error(msg)
    }

    return (


        <>
            <NavigationBar></NavigationBar>

            <div className='form'>
                <Form className='m-4 inputfield'>

                    <Form.Select aria-label="Default select example" onChange={handleCategoriesChange}>
                        <option className='text-center'>Select Category </option>
                        <option value="fashion">Fashion & Beauty</option>
                        <option value="food">Food</option>
                        <option value="sports">Sports Fitness & Wellness</option>
                        <option value="travel">Travel</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="Technology">Technology</option>
                    </Form.Select>

                    <Form.Group className="mb-3 inputfield" controlId="Description">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter a sutaible Title for your blog " onChange={handleTitleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3 inputfield" controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter A small description " onChange={handleDescriptionChange} />
                    </Form.Group>

                    <Form.Group className="mb-3 inputfield" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your Blog here</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Write your Blog Here . . . . .' onChange={handleContentChange} />
                    </Form.Group>

                    <img alt="" src={image} />

                    <Form.Group className="mb-3 inputfield" controlId="output">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control type='file' placeholder="Select Image For Blog" accept='image/*' onChange={loadImage} />
                    </Form.Group>

                    <input type="button" value={"POST"} onClick={postData} />

                </Form>
            </div></>

    );
}

export default CreateBlog;