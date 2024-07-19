import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './CreateBlog.css';
import NavigationBar from "./Nav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import uploadimg from "../img/upload.jpg"

import ReactQuill from 'react-quill';


function CreateBlog() {
    const navigate = useNavigate()

    // Toast Function ----------- ---------- --------- -------
    const notifyA = (msg) => toast.success(msg)
    const notifyB = (msg) => toast.error(msg)


    // State Variables -------------------------------

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")
    const [url, seturl] = useState("")
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
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
            // console.log(event.target.files[0])
            setImage(event.target.files[0])
        }

    }
    //preview 
    function Default() {
        if (!{ title }) {
            return "Title"
        } else {
            return { title };
        }

    }


    // ------------Blog posting to server-----------------

    useEffect(() => {
        if (url) {
            // console.log(title, description, content, image, author, views, like, categories,url)

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
                        image: url,
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

        }
    }, [url])


    const postDetails = () => {
        if (!image) {
            notifyB("Please Select Image")
        }
        const data = new FormData();
        data.append("file", image)
        data.append("upload_preset", "blog-website")
        data.append("cloud_name", "mohitcloud2003")
        fetch("https://api.cloudinary.com/v1_1/mohitcloud2003/image/upload",
            {
                method: "POST",
                body: data
            })
            .then(res => res.json())
            .then(data => seturl(data.url))
            .catch(err => { console.log(err) })

    }

    return (


        <>


            <div className='form'>
                <div className='blogpost-form'>
                    <Form className='m-4 inputfield'>

                        <Form.Select aria-label="Default select example" onChange={handleCategoriesChange}>
                            <option className='text-center'>Select Category </option>
                            <option value="fashion">Fashion & Beauty</option>
                            <option value="food">Food</option>
                            <option value="sports">Sports Fitness & Wellness</option>
                            <option value="travel">Travel</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="technology">Technology</option>
                        </Form.Select>
                        <div className='mb-3 inp-bx-img-tit w-100'>
                            <Form.Group className="mb-3  inputfield title" controlId="Description">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter a sutaible Title for your blog " onChange={handleTitleChange} className='title-inp' />
                            </Form.Group>

                            <Form.Group className="mb-3  inputfield"  >
                                <Form.Label>Image Link</Form.Label>
                                <Form.Control type='file' placeholder="Select Image For Blog" accept='image/*' onChange={loadImage} />
                            </Form.Group>




                        </div>
                        <Form.Group className="mb-3 inputfield" controlId="Description">
                            <Form.Label id='editor'>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter A small description " onChange={handleDescriptionChange} />
                        </Form.Group>

                        <Form.Group className="mb-3 inputfield" controlId="exampleForm.ControlTextarea1" >

                            <Form.Label>Write your Blog here</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='Write your Blog Here . . . . .' onChange={handleContentChange} className='blogcontent' />
                        </Form.Group>



                        <input type="button" value={"Post Blog"} onClick={postDetails} />

                    </Form></div>
                <div className='preview'>

                    <div><h1>Your Blog Preview</h1></div>

                    <div className='main-preview' >
                        <h4> {categories}</h4>
                        <h4>{title}</h4>
                        <img alt="" id='output' className='preview-image' src={uploadimg} />
                        <h4>
                            { }
                        </h4>
                        <h4>{description}</h4>

                        <h4>{content}</h4>



                    </div>
                </div>
            </div></>

    );
}


export default CreateBlog;