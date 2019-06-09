import React, { Component } from 'react';

class FoodLi extends Component {
    render(){
        return(
            <li>
                <p>{this.props.item.name} - {this.props.item.quantity}</p>
            </li>
        )
    }
}

export default FoodLi;