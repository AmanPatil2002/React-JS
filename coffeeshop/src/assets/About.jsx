import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function About() {
  return (
    <div>
      <Container className='mb-2'>
        <Row className='mt-5 align-items-center'>
          <Col>
          <h1 style={{color:"orangered"}} className='fw-bolder'>About US</h1>
          <p className='py-3 fs-5'>Full cleaning and housekeeping services for companies and households.</p>
          <p className='pb-3 fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
          <button variant='dark' className='p-3 px-5 btn1 fs-5'>Read More</button>
          </Col>
          <Col>
            <img src='./images/about-img.png' alt='' className='img-fluid mx-auto d-block w-100'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About