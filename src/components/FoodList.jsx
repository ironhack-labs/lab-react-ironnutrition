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

    const [searchString, setSearchString] = useState("")

    let foodToDisplay
    if (!searchString) {
        foodToDisplay = foods
    } else {
        foodToDisplay = foods.filter(food => food.name.toLowerCase().includes(searchString.toLowerCase()))
    }

    return (
        <div>
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm foods={foods} setFoods={setFoods} />
            <Search searchString={searchString} handleSearch={setSearchString} />
            <h2>Food List</h2>
            {foodToDisplay.map(food => {
                return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
            })}
        </div>
    )
}

export default FoodList
