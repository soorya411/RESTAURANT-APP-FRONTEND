import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function RestReview({ rw }) { //array
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(rw);
    return (
<div>
       
            <Button variant="dark" style={{ color: 'white',fontSize:'14px' }} onClick={handleShow}>
                Reviews
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Reviews</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    
                 
                        {rw?.map(item => (
                            <div>
 <h6>{item.name}</h6>
 <p>{item.date}</p>
 <p>{item.rating}</p>
 <p>{item.comments}</p>
                            </div>
                           
                
                        ))}
                         
                    
                </Offcanvas.Body>
            </Offcanvas>
            
            </div>
    )
}

export default RestReview