import React, { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm"; 
import foodsJson from "../foods.json"; 

const FoodList = () => {
const [foods, setFoods] = useState(foodsJson);


const handleDelete = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
};


const handleAddFood = (newFood) => {
    setFoods((prevFoods) => [...prevFoods, newFood]);
};

return (
    <div>
    <AddFoodForm onAddFood={handleAddFood} />
    {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={handleDelete} />
    ))}
    </div>
);
};

export default FoodList;
