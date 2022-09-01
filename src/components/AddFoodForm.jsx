import React from 'react'
import { Divider, Input } from 'antd';
import { useState } from 'react';


export const AddFoodForm = ({foodArr, setFoodArr}) => {

    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState('');
    const [servings, setServings] = useState(1);

    const handleName = (event) => {setName(event.target.value)};
    const handleCalories = (event) => {setCalories(event.target.value)}
    const handleImage = (event) => {setImage(event.target.value)}
    const handleServings = (event) => {setServings(event.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault();
        const foodArrCopy = [...foodArr]
        const newFood = {name, calories, image, servings};
        foodArrCopy.push(newFood)
        setFoodArr(foodArrCopy)
    }

    return (
        <form onSubmit={handleSubmit}>
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input value={name} type="text" onChange={handleName} />
    
          <label>Image</label>
          <Input value={calories} type="text" onChange={handleCalories} />
    
          <label>Calories</label>
          <Input value={image} type="text" onChange={handleImage} />

          <label>Servings</label>
          <Input value={servings} type="text" onChange={handleServings} />
    
          <button type="submit">Create</button>
        </form>
      );
}

export default AddFoodForm;
