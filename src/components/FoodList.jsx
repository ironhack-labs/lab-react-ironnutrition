import React from 'react'
import foodsJson from '../foods.json'
import { useState } from 'react'
import AddFoodForm from './AddFoodForm'
import FoodBox from './FoodBox'
import SearchBar from './SearchBar'

function FoodList() {
    const [food,setFood] = useState(foodsJson)
    const[query,setQuery]= useState('')

    function deleteFood(id){
      const updatedFood = food.filter((oneFood)=>oneFood.id!==id)
      setFood(updatedFood)
    }
    const foodsToDisplay= food.filter((food)=>food.name.toLowerCase().includes(query.toLowerCase()))
   
    return (
      <div className="App" style={{display:'flex', flexDirection:'column',width:'100%', justifyContent:'center'}}>
        <h1>LAB | React IronNutrition</h1>
        <AddFoodForm food={food} setFood={setFood}  />
        <SearchBar query={query} setQuery={setQuery}/>
        <FoodBox  food={foodsToDisplay} setFood={setFood} deleteFood={deleteFood}/>
      </div>
    );
  }

export default FoodList;
