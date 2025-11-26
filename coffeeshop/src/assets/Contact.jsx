import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
function Contact() {
  return (
    <div>
      <Container fluid>
        <h1 className='text-center fw-bold my-4' style={{color:"orange"}}>Contact Us</h1>
        <Row>
          <Col className='bgimg1 p-4'>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">                
                <Form.Control type="text" placeholder="Name" className='w-75 p-2 mx-auto d-block rounded-pill'/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                
                <Form.Control type="email" placeholder="Email" className='w-75 p-2 mx-auto d-block rounded-pill'/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">                
                <Form.Control type="text" placeholder="Phone Number" className='w-75 p-2 mx-auto d-block rounded-pill'/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={5} placeholder='Message' className='w-75 p-2 mx-auto d-block rounded rounded-5'/>
              </Form.Group>
              <Button type='submit' className='text-center mx-auto d-block px-5 rounded-pill fs-5'>SEND</Button>
            </Form>
          </Col>
          <Col>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10500.157982790408!2d2.2773161191594893!3d48.85745724556077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f998851939f%3A0x5da214ddc74f6006!2sEiffel%20Tower%20Tour!5e0!3m2!1sen!2sin!4v1737091632139!5m2!1sen!2sin" width="700" height="470" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact