import React, { Component } from 'react'

export default class Today extends Component {
    render() {
        return (
            <div>
                <h2>Today's Food</h2>
                <p>I ate {this.props.quantity} {this.props.meal} for a total of calories of {this.props.calories}</p>
            </div>
        )
    }
}
