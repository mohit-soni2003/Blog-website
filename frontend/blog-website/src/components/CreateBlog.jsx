import Form from 'react-bootstrap/Form';
import './CreateBlog.css';
import NavigationBar from "./Nav"
function CreateBlog() {
    return (

        <>
            <NavigationBar></NavigationBar>

            <div className='form'>
                <Form className='m-4 inputfield'>
                    <Form.Select aria-label="Default select example">
                        <option className='text-center'>Select Category </option>
                        <option value="fashion">Fashion & Beauty</option>
                        <option value="food">Food</option>
                        <option value="sports">Sports Fitness & Wellness</option>
                        <option value="travel">Travel</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="Technology">Technology</option>
                    </Form.Select>

                    <Form.Group className="mb-3 inputfield" controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter A small description " />
                    </Form.Group>
                    <Form.Group className="mb-3 inputfield" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your Blog here</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Write your Blog Here . . . . .' />
                    </Form.Group>
                    <Form.Group className="mb-3 inputfield" controlId="Description">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control type="link" placeholder="Paste Image link here" />
                    </Form.Group>

                    <input type="button" value={"POST"} />

                </Form>
            </div></>

    );
}

export default CreateBlog;