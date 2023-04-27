import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';

import bg1 from '../../../assets/bg.png'
import QZone from '../Q_Zone/QZone';

const RightNavbar = () => {
    return (
        <div>
            <h5 className='fw-bolder m-1'>Login With</h5>
            <div className='p-2 mb-5 m-1'>
                  <Button variant="primary" className='p-2 m-1 w-100'><FaGoogle className='text-warning m-1' /> Login with Google</Button>
      <Button variant="secondary" className='p-2 m-1 w-100'><FaGithub  className='text-dark m-1'/> Login with Github</Button>
      </div>
   <h5 className='m-1'>Find Us On</h5>
      <ListGroup className='p-2'>
      <ListGroup.Item className='m-1 p-3'><FaFacebook className='text-info m-1 '></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='m-1 p-3'><FaTwitter className='text-success m-1' /> Twitter</ListGroup.Item>
      <ListGroup.Item className='m-1 p-3'><FaInstagram   className='text-warning m-1'/> Instagram</ListGroup.Item>
    
    </ListGroup>

  
    <QZone></QZone>
          <div className='p-3 m-2'>
 <img className='position-absolute text-center' src={bg1} alt="background" />
 <div className='position-relative text-white p-5  text-center'> <h2 className='fw-bolder'>Create an Amazing Newspaper</h2>
 <p className='my-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
 <Button variant="danger" className='p-3 fw-bold m-2'>Learn More</Button>

 </div>


          </div>
        </div>
    );
};

export default RightNavbar;