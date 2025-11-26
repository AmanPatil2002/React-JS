import React from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

function Services() {
  return (
    <div className='bgimg'>
      <Container className='text-center text-white py-5 p-5'>
        <h1>Services</h1>
        <p>Typesetting industry lorem Ipsum is simply dummy text of the</p>
        <Row>
          <Col>
          <Card style={{ width: '20rem' }} className='border-0 p-3'>
            <img src='./images/icon1.png' alt='' className='mx-auto d-block p-4'/>
            <Card.Body>
              <Card.Title className='fs-2 mb-3'>Original Coffee</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </Card.Text>
              <Button variant='dark' className='px-5 mt-4 mx-auto'>Read More</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '20rem' }} className='border-0 p-3'>
            <img src='./images/icon2.png' alt='' className='mx-auto d-block p-1'/>
            <Card.Body>
              <Card.Title className='fs-2 mb-3'>20 Coffee Flavors</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </Card.Text>
              <Button variant='dark' className='px-5 mt-4 mx-auto'>Read More</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '20rem' }} className='border-0 p-3'>
            <img src='./images/icon3.png' alt='' className='mx-auto d-block'/>
            <Card.Body>
              <Card.Title className='fs-2 mb-3'>Pleasant Abient</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </Card.Text>
              <Button variant='dark' className='px-5 mt-4 mx-auto'>Read More</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services