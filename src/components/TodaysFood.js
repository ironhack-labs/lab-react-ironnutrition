import React from "react";

function TodaysFood(props) {
    const { foods } = props;
    const selectedFoods = [...foods].filter(food => food.quantity > 0);
    const totalCalories = selectedFoods.reduce((acc, curr)=> {
        return acc + (curr.calories)*(curr.quantity);
    }, 0);
    console.log("totalCalories: ", totalCalories);

    return (
            <div>
                <ul>
                    { selectedFoods.map(food => {
                        return (
                            <li key={food.name}>{food.quantity} {food.name}</li>
                        )
                    })}   
                </ul>
                <p>Total Calories: {totalCalories}</p>
            </div>
            )
}


export default TodaysFood;