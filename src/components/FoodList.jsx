import React, { useState } from "react"
import foodsJson from "../foods.json"
import FoodBox from "./FoodBox"
import AddFoodForm from "./AddFoodForm"
import Search from "./Search"

function FoodList() {
    const [foods, setFoods] = useState(foodsJson)

    const deleteFood = foodName => {
        const filteredFoods = foods.filter(food => {
            return food.name !== foodName
        })
        setFoods(filteredFoods)
    }

    let searchedFoods
    const searchFood = food => {
        const foodsCopy = [...foods]
        if (food === "") {
            searchedFoods = foodsCopy
        } else {
            searchedFoods = foodsCopy.filter(food => {
                return food.name.toLowerCase().includes(food.toLowerCase())
            })
        }
        setFoods(searchedFoods)
    }

    return (
        <div>
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm foods={foods} setFoods={setFoods} />
            <Search searchFood={searchFood} />
            <h2>Food List</h2>
            {foods.map(food => {
                return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
            })}
        </div>
    )
}

export default FoodList
