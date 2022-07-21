import React, { useState } from "react";

import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
    const {name, calories, servings, image, setName, setCalories, setServings, setImage, handleSubmit} = props;
    const updateName = (event) => {
        setName(event.currentTarget.value)
    }
    const updateCalories = (event) => {
        setCalories(event.currentTarget.value)
    }
    const updateServings = (event) => {
        setServings(event.currentTarget.value)
    }
    const updateImage = (event) => {
        setImage(event.currentTarget.value)
    }
  return (

    <form onSubmit={handleSubmit}>
    
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <input value={name} type="text" onChange={updateName} />
e
      <label>Image</label>
      <input value={image} type="text" onChange={updateImage} />
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <input value={calories} type="text" onChange={updateCalories} />
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <input value={servings} type="text" onChange={updateServings} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;