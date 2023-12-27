import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (

    <div> <MDBNavbar light bgColor='light'>
    <MDBContainer fluid >
      <MDBNavbarBrand href=''>
        <img
          src='https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.1.1046592881.1689925740&semt=ais'
          height='50'
          alt=''
          loading='lazy'
        />
        RestoCafe
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>

  )
}

export default Header