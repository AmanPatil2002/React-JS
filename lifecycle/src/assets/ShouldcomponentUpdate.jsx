import { Component } from 'react'

export default class ShouldcomponentUpdate extends Component {
    constructor(){
        super();
        this.state = {
            price:2
        }
    }
    shouldComponentUpdate(prestate){
        console.log(this.state.price)
        if(this.state.price>50){
            return false
        }
        return true
    }
  render(){
    return (
        <div>
            <div style={{backgroundColor:"pink",color:"purple"}}>
                <h1>Should Component Update Method {this.state.price}</h1>
                <button onClick={()=>this.setState({price:this.state.price*5})}>Update state</button>
            </div>
        </div>
      )
  }
}
