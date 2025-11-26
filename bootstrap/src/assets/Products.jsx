import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Products extends Component {
    constructor()
    {
        super()
        this.state={
            prods:[
                {id:1,name:"Pizza",price:100,image:"./images/f1.jpeg"},
                {id:2,name:"Burger",price:80,image:"./images/f2.jpeg"},
                {id:3,name:"Pizza",price:110,image:"./images/f3.jpeg"},
                {id:4,name:"Pizza",price:140,image:"./images/f4.jpeg"},
                {id:5,name:"Burger",price:90,image:"./images/f5.jpeg"},
            ]
        }
    }
  render() {
    return (
      <div>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                this.state.prods.map((p,i)=>{
                    return (
                        <Col key={i}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={p.image} height={150} width={180} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text>
                                        $ {p.price}
                                    </Card.Text>
                                    <Button variant="warning">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </div>
      </div>
    )
  }
}