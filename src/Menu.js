import React, { Component } from 'react'
import MenuCard from './MenuCard'

class Menu extends Component {

    // sumCalories = (accumulator, current) => accumulator + current;
    totalCalories = (arr) => {
        let calories = 0;
        arr.forEach(food => {
            calories = calories + food.calories            
        });
        return calories
    }

    render() {
        console.log('this.props inside menu.js', this.props)
        return (
            <div>
                <h3>Today's menu:</h3>
                <ul>
                    <li>here goes food name</li>
                    { this.props.menu.map(menuitem => {
                        return  <MenuCard item={menuitem} />
                    }) }
                    <li> that's it </li>
                </ul>
                <h4>total calories: {this.totalCalories(this.props.menu)}</h4>
                {/* <h4>total calories: {this.props.menu.calories.reduce(this.sumCalories)} </h4> */}

            </div>
        )
    }
}

export default Menu
