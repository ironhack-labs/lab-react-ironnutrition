import React, { Component } from 'react'

export default class DailyList extends Component {
    render() {
        return (
            <li>
                <p>{this.props.number} {this.props.name} = {this.props.calories * this.props.number}</p>
            </li>
        )
    }
}
