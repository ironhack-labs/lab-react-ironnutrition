import React, { Component } from 'react'
class MenuCard extends Component {
    render() {
        console.log('this.props inside menuCard.js', this.props)
        return (
            <ul>
                <li> {this.props.item.name}, {this.props.item.calories} kcal</li>
            </ul>
                
        )
    }
}

export default MenuCard
