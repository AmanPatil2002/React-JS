import { Component } from "react";

class Classcomp extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
           
    }
    render(){
        return(
            <>
                <h2>Class Component</h2>
                <h2>Book name: {this.props.book.name}</h2>
                <h2>Book author: {this.props.book.author}</h2>
                {
                    this.props.name.map((n,i)=>{
                        return(
                            <li key={i}>{n}</li>
                        )
                    })
                }
                <h3>Counter: {this.state.counter}</h3>  
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>+</button>            
            </>
        )
    }
}
export default Classcomp;