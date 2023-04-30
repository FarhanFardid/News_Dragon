import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import ed1 from '../../../assets/1.png'
import ed2 from '../../../assets/2.png'
import ed3 from '../../../assets/3.png'

const LeftNavbar = () => {
    const [categories,setCategories] = useState([]);
     
    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then (res => res.json())
        .then (data => setCategories(data))
        .catch(error => {console.log(error)})
    },[])

    return (
        
        <div>
            <h4 className='p-3 fw-bold'>All Category</h4>

           <div className='p-2'>
                {
                    categories.map(category => <p key={category.id} className='bg-secondary p-3 border border-2  text-center w-75 fw-bold fs-5 rounded-pill'>

                        <Link to ={`/category/${category.id}`} className='text-decoration-none text-white'>{category.name}</Link>

                    </p> )
                }
            </div>
            <div className='p-3 mt-2'>
            <h3 className='fw-bold p-2'>Editors Insights</h3>
                <Row xs={1} md={1} lg={1} className="g-4">
       
       <Col >
         <Card>
           <Card.Img variant="top" src={ed1} />
           <Card.Body>
             <Card.Title>The average price for a house in the Hamptons just hit a record $3 million</Card.Title>
             <Card.Text>

             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
       <Col >
         <Card>
           <Card.Img variant="top" src={ed2} />
           <Card.Body>
             <Card.Title>Universities Invoking Title IX to Stifle Journalists</Card.Title>
             <Card.Text>
            
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
       <Col >
         <Card>
           <Card.Img variant="top" src={ed3} />
           <Card.Body>
             <Card.Title>Union groundbreaking on sleek sports complex</Card.Title>
             <Card.Text>
            
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
  
   </Row>

        </div>
        </div>
    );
};

export default LeftNavbar;