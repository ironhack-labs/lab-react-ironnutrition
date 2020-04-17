import React, { Component } from 'react';

class TodayFood extends Component {
    render(){
        const { name, calories, quantity, calcalories } = this.props;

        return (
            <ul className="listFoods">
               <li onChange={calcalories}>  {quantity} {name} = {calories} calories </li>
            </ul>
        )
    } 
}

export default TodayFood;