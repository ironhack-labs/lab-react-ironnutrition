import React, { Component } from 'react';

export default class AddToList extends Component {
    
    render() {
        console.log(this.props.children)
        return (
            <li>
                <p>{this.props.children.quantity} {this.props.children.name} = {this.props.children.calories*this.props.children.quantity} Cal <button onClick={(e=>this.props.removeTodayHandler(this.props.children))}>Delete</button></p>
            </li>
    )}
}
