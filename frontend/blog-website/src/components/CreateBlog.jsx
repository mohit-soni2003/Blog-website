import Form from 'react-bootstrap/Form';

function CreateBlog() {
  return (
    <Form className='m-5'>
    <Form.Select aria-label="Default select example">
      <option className='text-center'>Select Category </option>
      <option value="fashion">Fashion & Beauty</option>
      <option value="food">Food</option>
      <option value="sports">Sports Fitness & Wellness</option>
      <option value="travel">Travel</option>
      <option value="entertainment">Entertainment</option>
      <option value="Technology">Technology</option>
    </Form.Select>
    <Form.Group className="mb-3" controlId="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter your Blog Description"  />
      </Form.Group>
    
    
            
    </Form>
    
  );
}

export default CreateBlog;