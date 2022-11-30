import { Divider, Input } from 'antd';
import { FoodBox } from './FoodBox';
import App from '../App';
import { v4 as uuidv4 } from "uuid"
import React, { useState } from 'react';

// Iteration 4

function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState('')
    const [servings, setServings] = useState(0)
    const handleSubmit = event => {
        // Prevent the site from being refreshed
        event.preventDefault()
    
        console.log(name, calories, image, servings)
    
        // Create a new movie based on the state values
        const newFood = {
            name,
            calories,
            image,
            servings
        }
    
        console.log(newFood)
    
        // Add new movie to movies list
        props.setFood([newFood,...props.food])
    
        // Reset input fields
        setName("")
        setCalories(0)
        setImage("")
        setServings(0)
    }
    return (
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />
  
        <label>Image</label>
        <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />
  
        <label>Calories</label>
        <Input value={calories} type="text" onChange={(e) => {setCalories(e.target.value)}} />
  
        <label>Servings</label>
        <Input value={servings} type="text" onChange={(e) => {setServings(e.target.value)}} />
  
        <button type="submit">Create</button>
      </form>
    );
  }
  
  export default AddFoodForm;
