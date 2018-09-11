import React from 'react';
import 'bulma/css/bulma.css';
import foods from '../../foods.json';
import FoodBox from "./FoodBox";

class Application extends React.Component {
    render() {
        console.log(foods)

        const foodList = foods.map(food => {
            return (
                <FoodBox
                name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
                />
            )
        })
        return (
            <div className="container">
                <h1>IronNutrition</h1>
                {foodList}
            </div>
        )
    }
}

export default Application
