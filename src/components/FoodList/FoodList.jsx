import React from 'react'
import FoodBox from '../FoodBox'
import AddFoodForm from '../AddFoodForm'
import foodJson from "../../foods.json"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './FoodList.css'


function FoodList() {
    const[foodState, setFoodState] = useState(foodJson)

    const handleDelete = (item) => {
        setFoodState(foodState.filter((f) => f.id !== item.id ))
    }

    const handleCreate = (item) => {
        const newItem = { ...item, id: uuidv4() };
        setFoodState([...foodState, newItem])
  }
  return (
    <>
    <AddFoodForm onCreate={handleCreate}></AddFoodForm>
    <div className="food-container">
        {foodState.map((food) => (
          <FoodBox  onDelete={handleDelete}  key={food.id} item={food}></FoodBox>
        ))}
    </div>
  </>
  )
}

export default FoodList