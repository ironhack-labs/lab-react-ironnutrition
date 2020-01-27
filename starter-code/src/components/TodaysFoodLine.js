import React, { Component } from 'react';

export default class TodaysFoodLine extends Component {
    render() {
        //console.log(this.props);
        return (
            <li>{this.props.quantity} {this.props.name} {this.props.quantity * this.props.calories}</li>
        )
    }
}
