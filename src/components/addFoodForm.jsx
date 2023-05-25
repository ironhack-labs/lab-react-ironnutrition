import React from 'react'
import { useState } from 'react';

import { Card, Row, Col, Divider, Input, Button } from "antd";
function AddFoodFrom(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(1);
    const [servings, setServings] = useState(1);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);


    const handleSubmit = (e) =>{
        e.preventDefault();

        const newFood = {
            name, 
            image, 
            calories, 
            servings
        };

        // console.log(newMovie);
        props.addNewFood(newFood);

        setName("");
        setImage("");
        setCalories(1);
        setServings(1);
    }

  return (
    <div className='add-food'>
        <h3>Add a new Food</h3>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <Input name='name' value={name} type="text" onChange={handleNameInput} />
            
            <label>Image:</label>
            <Input name='image' value={image} type="text" onChange={handleImageInput} />
            
            <label>Calories:</label>
            <Input name='calories' value={calories} type="text" onChange={handleCaloriesInput} />

            <label>Servings:</label>
            <Input name='servings' value={servings} type="text" onChange={handleServingsInput} />
            
            <button type="submit">Add Food</button>
        </form>
    </div>


  )
}

export default AddFoodFrom;