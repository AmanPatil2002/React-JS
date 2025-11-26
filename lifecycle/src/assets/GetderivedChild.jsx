import React, { Component } from 'react';

export default class GetDerivedChild extends Component {
    constructor() {
        super();
        this.state = {
            qty:0
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props,state)
        return {
            qty:props.count*10
        }
    }
    render() {
        return (
            <div>
                <h2>Get Derived State From Child Component</h2>
                <h3>Quantity of Product : {this.state.qty}</h3>
            </div>
        );
    }
}

