import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import titleimage from '../Assets/img.PNG'

function Header() {
  return (

     <div style={{backgroundColor:'black',color:'white'}}>
       <MDBNavbar>
    <MDBContainer fluid >
      <MDBNavbarBrand href=''>

        <img src={titleimage} alt="" style={{height:'50px'}}/>
      <h4 style={{color:'white'}}>  RestoCafe</h4>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
  </div>

  )
}

export default Header