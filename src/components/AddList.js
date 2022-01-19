import React from "react";

const AddList = ( {selectedFoods} ) => {
    const caloriesArray = [...selectedFoods].map(food => parseInt(food.calories, 10));
    const quantityArray = [...selectedFoods].map(food => parseInt(food.quantity, 10));

    const array = [];
    for (let i = 0; i < selectedFoods.length; i += 1) {
        array[i] = caloriesArray[i] * quantityArray[i];
    };

    const totalCalories = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
                {selectedFoods.length > 0 && selectedFoods.map(food =>
                    <li key={food.name}>{food.quantity} {food.name} = {food.calories * food.quantity} cal</li>
                )}
            </ul>
            <strong>Total: {totalCalories} cal</strong>
        </div>
    );
};

export default AddList;