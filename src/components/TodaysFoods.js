import React, { Component } from 'react'

class TodaysFoods extends Component {

    render() {
        return (
            (<li> 
                <span>
                    {this.props.food.quantity} {this.props.food.name} = {this.props.food.calories * this.props.food.quantity} cal
                </span>   
                <a onClick={() => this.props.deleteFoodToday(this.props.food.name)}>
                    <img src="/trash-icon.png" width="15px" height="15px"/>
                </a>
            </li>)
        )
    }
}

export default TodaysFoods;
