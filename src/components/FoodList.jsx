import React from 'react'
import {useState} from "react";
import AddFoodForm from "./AddFoodForm.jsx"
import FoodBox from './FoodBox.jsx'
import foodsJson from "../foods.json";
import {Row} from "antd"
import SearchBar from './SearchBar.jsx'

export default function FoodList() {
  const [foods, setFoods] = useState(foodsJson); 
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id) =>{
    setFoods(foods.filter(food => food.id !== id))
  }
  const filteredFoods = foods.filter(food=>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddFood = (newFood)=>{
    setFoods([...foods,newFood])
  }
  return (
    <div >
    <AddFoodForm onAddFood = {handleAddFood}/>
    <SearchBar onSearch={setSearchQuery}/>
    {filteredFoods.length === 0 ? (
        <p>Oops. There is no food with that name!</p>
    ):
    <Row gutter={[16, 16]}>
      {filteredFoods.map((food)=>(
        <FoodBox key={food.name} food={food} onDelete={handleDelete}/>
      ))}  
    </Row>
}
    </div>
  )
}
