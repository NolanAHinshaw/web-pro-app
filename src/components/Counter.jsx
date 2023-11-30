import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
            console.log("count:", this.state.count++);
            this.setState({
                count: this.state.count++
            });
    }
  
    render() {
        return (
            <div className="counter">
            <h1>{this.state.count}</h1>
            <button onClick={this.incrementCount}></button>
            </div>
        );
    }
}

export default Counter;