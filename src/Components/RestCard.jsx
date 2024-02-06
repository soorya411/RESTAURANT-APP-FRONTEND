import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function RestCard({ restaurant }) {
  console.log(restaurant);
  return (
    <div >
      <Link to={`view/${restaurant.id}`} style={{textDecoration:'none'}}>
      <MDBCard className='my-4 mx-3' style={{ height: '500px',backgroundColor:'black' }}>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          
          <MDBCardImage src={restaurant.photograph} height={'350px'} position='top' alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{restaurant.name}</MDBCardTitle>
          <MDBCardText>
            {restaurant.address}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </Link>
    </div>
  )
}

export default RestCard