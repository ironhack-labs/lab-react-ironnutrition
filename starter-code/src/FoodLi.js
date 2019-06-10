import React, { Component } from 'react';

class FoodLi extends Component {
    render(){
        return(
            <li>
                <p>{this.props.item.quantity}: {this.props.item.name} - {this.props.item.calories} </p>
            </li>
        )
    }
}

export default FoodLi;