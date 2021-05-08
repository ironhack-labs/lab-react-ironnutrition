import React from 'react';
import './TodaysFoods.css';

class TodaysFoods extends React.Component {
    
    getTotalCalories = () => {
        let caloriesSum = 0
        this.props.items.forEach(food => {
            caloriesSum += food.calories*food.quantity
        });
        return caloriesSum
    } 

    render() {
        return(
            <div>
                <h2 className="title is-3">Today's foods</h2>
                <ul>
                    {this.props.items.map(food => (
                    <li className="food-item" key={food.name}>
                    {food.quantity} {food.name} = {food.calories*food.quantity} cal
                    </li>
                ))}
            </ul>
                <p>Total:{this.getTotalCalories()}cal</p>
            </div>
        )
    }
}

export default TodaysFoods;