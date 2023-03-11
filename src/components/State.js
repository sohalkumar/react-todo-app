import React from "react"


export default class State extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    
    increment() {
        this.setState({ counter: this.state.counter + 1 })
    }
    
    decrement() {
        // if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 })
        // }
    }

    render() {
        return (
            <>
                <h1>Counter : {this.state.counter}</h1>
                <p>{this.state.counter}</p>
                <button onClick={ this.increment }>Increment</button>
                <button onClick={() => { this.decrement() }}>Decrement</button>
            </>
        )
    }
}