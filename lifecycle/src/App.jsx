import { Component } from "react";
import Child from "./assets/Child";
import GetDerivedChild from "./assets/GetderivedChild";
import ShouldcomponentUpdate from "./assets/ShouldcomponentUpdate";
import Snapshot from "./assets/Snapshot";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      show: false,
    };
    console.log("constructor called");
  }
  componrentDidUpdate() {
    console.log("Counter updated");
  }
  render() {
    console.log("Render Method called");
    return (
      <div>
        <h1>Life Cycle Methods</h1>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.show })}>
          Toggle
        </button>
        {this.state.show ? <Child /> : null}
        <GetDerivedChild count={this.state.count} />
        <ShouldcomponentUpdate />
        <Snapshot />
      </div>
    );
  }
}
