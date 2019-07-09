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

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        let dec = this.state.count - 1
        if(dec <= 0){
            dec = 0
        }
        this.setState({
            count: dec
        })
    }

    render() {
        return (
            <div>
                 <div>Count: {this.state.count}</div> 
                 <button onClick={this.increment}>Increment</button>  
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
