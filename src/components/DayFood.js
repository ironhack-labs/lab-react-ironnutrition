import React, { Component } from 'react'

class DayFood extends Component {
    render() {
        return (
            <div>
                <p>{this.props.aFood.quantity} {this.props.aFood.name} = {this.props.aFood.quantity * this.props.aFood.calories} calories</p>
            </div>
        )
    }
}

export default DayFood