import React, { Component } from 'react'

class FoodList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            // <li>1 Pizza = 400 cal</li>
            <li>{this.props.quantity} {this.props.name} = {this.props.calories} cal</li>
        )
    }
}

export default FoodList;
