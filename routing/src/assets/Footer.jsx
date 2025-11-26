import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <Container fluid className='bg-danger text-white'>
      <p className='text-center py-5'>
        <i className="fa-brands fa-facebook-f bg-white text-danger p-2 rounded me-3 px-3"></i>
        <i className="fa-brands fa-twitter bg-white text-danger p-2 rounded me-3"></i>
        <i className="fa-brands fa-google-plus-g bg-white text-danger p-2 rounded me-3"></i>
        <i className="fa-brands fa-pinterest-p bg-white text-danger p-2 rounded me-3"></i>
      </p>
      <p className='text-center pb-5 mt-0'>&copy; 2023 Freeeze. All Rights Reserved.</p>
      </Container>
    </div>
  )
}

export default Footer