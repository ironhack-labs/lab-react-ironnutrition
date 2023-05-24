import React, { useState } from 'react';
import { Divider, Input, Button } from 'antd';

// Iteration 4
function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleNameChange = (event) => {
    const updatedName = event.target.value;
    setName(updatedName);
  };

  const handleImageChange = (event) => {
    const updatedImage = event.target.value;
    setImage(updatedImage);
  };

  const handleCaloriesChange = (event) => {
    const updatedCalories = event.target.value;
    setCalories(updatedCalories);
  };

  const handleServingsChange = (event) => {
    const updatedServings = event.target.value;
    setServings(updatedServings);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name,
      image,
      calories,
      servings,
    };

    onAddFood(newFood);

    // Clear form fields
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food </Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsChange} />

      <Button type="primary" htmlType="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
