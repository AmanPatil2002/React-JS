
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Container>
        <img src='./images/bg-home.jpg' className='img-fluid mx-auto d-block w-100'/>
        <Row style={{backgroundColor:"#eae7e8"}}>
          <Col md={8} className='p-5'>
            <h6 className='text-secondary'>NEW PRODUCT</h6>
            <h4 className='text-danger'>The Twist of Healthy Yogurt</h4>
            <p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
          </Col>
          <Col md={4}>
          <img src='./images/yogurt.jpg'/>
          </Col>
        </Row>
        <div className='bg-warning text-white'>
          <ul className="list-inline p-5 text-center">
            <li className="list-inline-item p-3">
              <Link to='/Product' className='text-white'><i className="fa-solid fa-ice-cream fs-1"></i></Link>
              <h5 className='mt-4'>PRODUCT</h5>
            </li>
            <li className="list-inline-item p-3">
              <Link to='/About' className='text-white'><i className="fa-solid fa-hands fs-1"></i></Link>
              <h5 className='mt-4'>OUR STORY</h5>
            </li>
            <li className="list-inline-item p-3">
              <Link to='/Product' className='text-white'><i className="fa-solid fa-droplet fs-1"></i></Link>
              <h5 className='mt-4'>FLAVORS</h5>
            </li>
            <li className="list-inline-item p-3">
              <Link to='/Contact' className='text-white'><i className="fa-solid fa-location-dot fs-1"></i></Link>
              <h5 className='mt-4'>OUR LOCATION</h5>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Home