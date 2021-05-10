import React from 'react';

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
                    {this.props.items.map((food, index) => (
                    <li className="food-item" key={index}>
                    {food.quantity} {food.name} = {food.calories*food.quantity} cal <button onClick={() => this.props.removeItemByIndex(index)}>&#128465;</button>
                    </li>
                ))}
            </ul>
                <p>Total:{this.getTotalCalories()}cal</p>
            </div>
        )
    }
}
export default TodaysFoods;