import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestCard from './RestCard'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';



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
<div style={{width:'100%',height:'700px',overflow:'hidden'}}>
<MDBCarousel>
      <MDBCarouselItem itemId={1}>
        <img src='https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=996&t=st=1705256478~exp=1705257078~hmac=dc02d9f03043548030613dd4395a7049888d944bcf14f316a5cdf54a414efcf6' className='d-block w-100 ' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?w=1060&t=st=1705254959~exp=1705255559~hmac=e54896a8007204e3426e2ace6b68c7f2017641fdeb6fb004cea81023e6ddd37f' className='d-block w-100 ' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1060&t=st=1705255023~exp=1705255623~hmac=cad36b421a8412162b4e80dae458b06cdca4c036273653be2f2c216c81da6d3a' className='d-block w-100 ' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
</div>
       <Row style={{backgroundColor:'black'}}>
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