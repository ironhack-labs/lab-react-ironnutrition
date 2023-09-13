import React from "react";
import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

export default function FoodList() {
    const [foodsArray, setFoodsArray] = useState(foodsJson);

    const deleteFood = (foodId) => {
        const newList = foodsArray.filter((e) => {
            return e.id !== foodId;
        });
        setFoodsArray(newList);
    };
    const addFood = (newFood) => {
        const addedFoodArray = [newFood, ...foodsArray];
        setFoodsArray(addedFoodArray);
    };
    return (
        <div>
            <AddFoodForm callbackToAddFood={addFood} />
            <FoodBox food={foodsArray} callbackToDelete={deleteFood} />
        </div>
    );
}
