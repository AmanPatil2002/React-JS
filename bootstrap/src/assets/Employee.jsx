import React, { Component } from 'react'


export default class Employees extends Component {
    constructor()
    {
        super()
        this.state={
            emp:[{id:1,name:"AAA",image:"./images/person1.jpeg",email:"aaa@test.com",phone:11111},
                {id:2,name:"BBB",image:"./images/person2.jpeg",email:"bbb@test.com",phone:22222},
                {id:3,name:"CCC",image:"./images/person3.jpeg",email:"ccc@test.com",phone:33333},
                {id:4,name:"DDD",image:"./images/person4.jpeg",email:"ddd@test.com",phone:44444},
                {id:5,name:"EEE",image:"./images/person5.jpeg",email:"eee@test.com",phone:55555}
            ]
        }
    }
  render() {
    return (
      <div>
        <table border={2}>
            <thead>
                <tr><th>ID</th><th>NAME</th><th>PHOTO</th><th>EMAIL</th><th>PHONE</th></tr>
            </thead>
            <tbody>
                {
                    this.state.emp.map((e,i)=>{
                        return (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td><img src={e.image} height={60} width={60}/></td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}