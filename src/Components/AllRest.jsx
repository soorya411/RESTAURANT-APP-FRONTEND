import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestCard from './RestCard'



function AllRest() {
const base_url='https://restaurant-app-backend-l7a0.onrender.com/restaurants'
//to hold array of data
const[ AllRestData,setAllRestData]=useState([])
//API fetching
const fetchData=async()=>{
  const result = await axios.get(base_url)
  console.log(result);
  setAllRestData(result.data)
}
console.log(AllRestData);
useEffect(()=>{
  fetchData()
},[])
  return (
    <div>
       <Row>
      {
        AllRestData.map(item=>(
         //screen size views ->sm={12} md={6} lg={4} xl={3}
          <Col sm={12} md={6} lg={4} xl={3}>  
         <RestCard restaurant={item}/>
          </Col>
         
        ))
        }
        </Row>
      </div>
    )
  }
export default AllRest