import React, { useContext } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Register = () => {

  const{createUser} = useContext(AuthContext);
  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);
    createUser(email,password)
    .then(result =>{
      const signedUser = result.user;
      console.log(signedUser);
    })
    .catch(error=>{console.log(error)})
  }
    return (
        <div className='m-3 p-3'>
              <Form onSubmit={handleSignUp} className='m-5 p-5 bg-secondary border-1 rounded-2'>
      <Row className="mx-auto  w-50">
        <h2 className='fw-bold p-3 text-center text-white '>Please Register Account</h2>
        <Form.Group controlId="formGridName" className='p-3'>
          <Form.Label className='fw-bold fs-5 text-white'>Name</Form.Label>
          <Form.Control type="text"  name="name" placeholder="Enter your Name" className='h-75' />
        </Form.Group>
        <Form.Group controlId="formGridEmail" className='p-3'>
          <Form.Label className='fw-bold fs-5 text-white'>Email</Form.Label>
          <Form.Control type="email"  name="email" placeholder="Enter your email" className='h-75' />
        </Form.Group>

        <Form.Group controlId="formGridPassword" className='p-3'>
          <Form.Label className='fw-bold fs-5 text-white'>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter Password"  className='h-75'/>
        </Form.Group>

        <Form.Group className="m-2 p-3" controlId="formBasicCheckbox">
        <Form.Check className='fw-bold fs-5 text-white' name="accept" type="checkbox" label="Accept Terms & Conditions" />
      </Form.Group>
      </Row>

<div className='text-center p-3'> <Button variant="primary" type="submit" className='w-25 fw-bolder fs-5 m-3'>
     Sign Up
      </Button></div>
      <p className='text-white fs-5 fw-bold text-center'>Already have a Dragon News account ? <Link to="/auth/login" className=' text-info text-decoration-none'>Login </Link> </p>
    </Form>
        </div>
    );
};

export default Register;