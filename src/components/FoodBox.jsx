// Your code here
import React from "react";
function FoodBox({ food, onDelete }) {
    const { id, name, calories, image, servings } = food;
const deleteFood = () =>{
    onDelete(id)
}
    return (
        <div>
            <p>{food.name}</p>

            <img src={food.image} />

            <p>{food.calories}</p>
            <p>{food.servings}</p>

            <p>
                <b>Total Calories: {food.calories * food.servings}</b> kcal
            </p>

            <button onClick={deleteFood}>Delete</button>
        </div>
    )
}
export default FoodBox;