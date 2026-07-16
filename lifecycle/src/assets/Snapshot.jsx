import { Component } from 'react'

export default class Snapshot extends Component {
    constructor(){
        super();
        this.state = {
            data:0
        }
    }
    componentDidUpdate(props,state,snapshot){
        console.log(props,state,snapshot)
    }
    getSnapshotBeforeUpdate(preprops,prestate){
        console.log(preprops)
        return prestate.data*5
    }
  render(){
    return (
        <div>
            <h2>Child component {this.state.data}</h2>
            <button onClick={()=>this.setState({data:this.state.data+1})}>Update state</button>
        </div>
      )
  }
}
