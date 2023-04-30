import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ed1 from '../../../assets/editorsInsight1.png'
import ed2 from '../../../assets/editorsInsight2.png'
import ed3 from '../../../assets/3.png'

const Editors = () => {
    return (
        <div className='p-3 mt-2'>
            <h3 className='fw-bold p-2'>Editors Insights</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
       
       <Col >
         <Card>
           <Card.Img variant="top" src={ed1} />
           <Card.Body>
             <Card.Title>Mobile phone chopper: iPhone gadget released</Card.Title>
             <Card.Text>
             A company that makes accessories for cell phones wants to add something else to the endless list of things you can do with an iPhone: flying a toy helicopter.
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
             In the half-century since it became federal law, Title IX of the Education Amendments of 1972 has generated countless headlines revolving around campus. 
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
             The Major League Soccer (MLS) team Philadelphia Union held a groundbreaking ceremony recently for its new world-class sports and recreation facility.
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
  
   </Row>

        </div>
    
    );
};

export default Editors;