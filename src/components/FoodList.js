import React, { useState } from "react";

import foodsData from "../foods.json";
import FoodBox from "../components/FoodBox"
import AddFood from "../components/AddFood"
import SearchBar from "./SearchBar";


export default function FoodList (){
    const [foods, setFoods] = useState(foodsData)


    function addFood(newFood){
        console.log("Forza Italia")
        const upDatedFoodData = [ newFood, ...foods ]
        setFoods(upDatedFoodData)
    }

    const filterFood = (query) => {
        if (!query) {                  
            setFoods(foodsData)
            return 
        }

        const filteredArrayFoods = foods.filter((food) =>{
            const foodName = food.name.toLowerCase();
            return foodName.includes(query);
        }
        );

        setFoods(filteredArrayFoods)
    }

    return(
        <div>
        <div className="App-header">
        <h1>IronNutrition</h1>
        </div>
        <div>
        <SearchBar
            filterFood={filterFood}
        />    
        <AddFood 
            addFoodHandler={addFood} 
        />
        {foods.map(food=>
            <FoodBox
            key={food.name}
            name={food.name}
            image={food.image}
            calories={food.calories}
            />
        )}            
        </div>
        </div>
    )
}

