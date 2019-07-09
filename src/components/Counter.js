import React, { Component } from 'react'

/**
 * State: Privatly data management
 */
export default class Counter extends Component {
    state = {
        count: 0
    }

    componentWillUnmount(){
        console.log("unmounting component")
    }

    componentDidMount(){
        console.log("mounting component ")
    }

    render() {
        return (
            <div>
                 <div>Count: {this.props.count}</div> 
                 <button onClick={this.props.increment}>Increment</button>  
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}
