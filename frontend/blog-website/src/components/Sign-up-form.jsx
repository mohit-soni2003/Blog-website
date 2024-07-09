import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignUp() {
  return (
    <Form className='m-5'>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder="xyz@gmail.com" />                                                           
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type='text' placeholder="Enter Username" />                                                           
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          Create a Strong Password
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;