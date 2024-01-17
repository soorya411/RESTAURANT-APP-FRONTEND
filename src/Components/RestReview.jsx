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
       
            <Button variant="dark" style={{ color: 'white',fontSize:'14px',width:'100%',borderRadius:'0px' }} onClick={handleShow}>
                Reviews <i class="fa-solid fa-play fa-beat" style={{color: '#74C0FC',backgroundColor:'transparent'}}></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Reviews</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    
                 
                        {rw?.map(item => (
                            <div>
 <h6 style={{color:'green'}}>{item.name}</h6>
 <p style={{fontSize:'13px'}}>{item.date}</p>

 <p>{item.rating} <i class="fa-solid fa-star" style={{color: 'gold'}}></i></p>
 <p style={{fontSize:'15px',fontFamily:'sans-serif',fontWeight:'lighter',textAlign:'justify'}}>{item.comments}</p>
 <p style={{color:'red',alignItems:'center'}}>-----------------------------------------------</p>
                            </div>
                           
                
                        ))}
                         
                    
                </Offcanvas.Body>
            </Offcanvas>
            
            </div>
    )
}

export default RestReview