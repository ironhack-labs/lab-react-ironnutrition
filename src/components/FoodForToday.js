import React from 'react'
import FoodBox from './FoodBox'
import './FoodForToday.css';

class FoodForToday extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todayFoodList: [],
            totalCalories: 0
        }
    }

    //Hi Tiago: I know this chunk is duplicated from FoodList.js
    //Probably a better design would have helped me to avoid this duplicity.

    addFood(food) {
        this.props.addToday()
    }

    renderFoods(foods) {
        let foodsToRender = foods.map(food => {
            return <FoodBox key={food.name} food = {food} />
        });
        return foodsToRender;
    }

    render() {
        return (
            <div>
                <h1>Today's food</h1>
                {this.renderFoods(this.state.todayFoodList)}
            </div>
        );
    }

    
}

export default FoodForToday;