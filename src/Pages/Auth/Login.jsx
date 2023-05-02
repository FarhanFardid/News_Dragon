import React, { useContext } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/home'
   
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    loginUser(email,password)
    .then(result => {
      const loggedUser = result.user;
      form.reset()
      console.log(loggedUser);
      navigate(from,{replace:true})
    
    })
    .catch(error =>{console.log(error)})
  }

    return (
        <div className='m-3 p-3'>
              <Form onSubmit={handleLogin} className='m-5 p-5 bg-secondary border-1 rounded-2'>
      <Row className="mx-auto  w-50">
        <h2 className='fw-bold p-3 text-center text-white '>Login Please</h2>
        <Form.Group controlId="formGridEmail" className='p-3'>
          <Form.Label className='fw-bold fs-5 text-white'>Email</Form.Label>
          <Form.Control type="email"  name="email" placeholder="Enter email" className='h-75' required />
        </Form.Group>

        <Form.Group controlId="formGridPassword" className='p-3'>
          <Form.Label className='fw-bold fs-5 text-white'>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter Password"  className='h-75' required/>
        </Form.Group>
      </Row>

<div className='text-center p-3'> <Button variant="primary" type="submit" className='w-25 fw-bolder fs-5 m-3'>
        Login
      </Button></div>
       <p className='text-white fs-5 fw-bold text-center'>New to Dragon News ? <Link to="/auth/register" className=' text-info text-decoration-none'>Sign Up</Link> </p>
    </Form>
        </div>
    );
};

export default Login;