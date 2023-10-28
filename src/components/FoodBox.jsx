import React from 'react'

const FoodBox = ({ food, onDelete }) => {
    const { name, calories, image, servings, id } = food;
    const totalCalories = servings * calories;

    const handleDelete = () => {
        onDelete(id);
    };


    return (
        <div className="food-box">
            <p>{name}</p>

            <img src={image} alt={name} />

            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
                <b>Total Calories: {totalCalories} kcal</b> kcal
            </p>

            <button onClick={handleDelete}>Delete</button>
        </div>)
}

export default FoodBox