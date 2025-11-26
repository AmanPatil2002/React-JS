import React, { Component } from 'react';

export default class Child extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
    render() {
        return (
            <div>
                <h2>Child Component</h2>
            </div>
        );
    }
}

