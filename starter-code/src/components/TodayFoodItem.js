import React, { useContext } from "react";
import { FoodContext } from "../App";
import _ from "lodash";



export const TodayFoodItem = ({ food }) => {
    const { todayFoods, setTodayFoods } = useContext(FoodContext);
    const handleDelete = (food) => {
        const newTodayFoods = [...todayFoods];
        _.remove(newTodayFoods, food);
        setTodayFoods(newTodayFoods);
    }
    return (
        <li>{food.quantity} {food.name} = {food.calories * food.quantity} cal     <i onClick={() => handleDelete(food)} className="delete" style={{ marginLeft: 10, marginTop: 2 }} /> </li>
    )
};