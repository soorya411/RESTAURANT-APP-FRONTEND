import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestCard from './RestCard'
import { MDBCarousel, MDBCarouselItem ,MDBCarouselCaption } from 'mdb-react-ui-kit';



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
<div style={{width:'100%',height:'700px',overflow:'hidden',backgroundColor:'black'}}>
<MDBCarousel>
      <MDBCarouselItem itemId={1}>
      <img src='https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg'className='d-block w-100 img-fluid' style={{width:'100%',height:'600px',objectFit:'cover'}} alt='...' />
      <MDBCarouselCaption >
        <div  className='py-3 rounded bg-black bg-opacity-50'>
        <h2 className='text-white '>"Food is symbolic of love when words are inadequate."</h2>
        <h5 className='text-danger'>Laughter is brightest where food is best.</h5>
          </div>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
      <img src='https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'className='d-block w-100 img-fluid' style={{width:'100%',height:'600px',objectFit:'cover'}} alt='...' />

        <MDBCarouselCaption >
        <div  className='py-3 rounded bg-black bg-opacity-50'>
        <h2 className='text-white '>"Food is symbolic of love when words are inadequate."</h2>
        <h5 className='text-danger'>Laughter is brightest where food is best.</h5>
          </div>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
      <img src='https://images.pexels.com/photos/970108/pexels-photo-970108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'className='d-block w-100 img-fluid' style={{width:'100%',height:'600px',objectFit:'cover'}} alt='...' />

        <MDBCarouselCaption >
        <div  className='py-3 rounded bg-black bg-opacity-50'>
        <h2 className='text-white '>"Food is symbolic of love when words are inadequate."</h2>
        <h5 className='text-danger'>Laughter is brightest where food is best.</h5>
          </div>
        </MDBCarouselCaption>
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