import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRest() {

  const [restDetails,setRestDetails]=useState({})
//useParams -> used to get path parameter from the url

  // const paraId=useParams()
  // console.log(paraId); //object ->id=3

  // destructure

  const {id} = useParams()
  console.log(id); //object ->id=3

  //API call to get details of the particular restaurant using the path parameter
   
  const base_url='https://restaurant-app-backend-l7a0.onrender.com/restaurants'

  const fetchRest=async()=>{
    const result =await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }
  useEffect(()=>{
    fetchRest()
  },[])
  return (
    <div>
      <Row>
        <Col>
        <img src={restDetails.photograph} alt="" style={{width:'550px',height:'600px',margin:'40px'}} />
        </Col>
      
        <Col>
          <div class="container my-5 p-5" style={{justifyContent:'center'}}>
        <ListGroup class="list mx-5">
        <h3 style={{textAlign:'center',paddingBottom:'10px'}}>{restDetails.name}</h3>
      
      <ListGroup.Item>Address : {restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Neighborhood : {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine_type : {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview rw={restDetails.reviews}/> </ListGroup.Item>
    </ListGroup>
    </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest