import React from "react";

function FoodBox({ food, onDelete }) {
    return (
        <div style={{ borderBottom: "1px solid #ccc", borderTop: "1px solid #ccc", margin: "0px", padding: "10px", textAlign: "center", width: "400px" }}>
            <h2>{food.name}</h2>
            <img
                src={food.image}
                alt={food.name}
                style={{ width: "150px", height: "auto", marginBottom: "10px" }}
            />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: {food.calories * food.servings} kcal</b>
            </p>
            <button onClick={() => onDelete(food.name)}>Delete</button>
        </div>
    );
}

export default FoodBox;
