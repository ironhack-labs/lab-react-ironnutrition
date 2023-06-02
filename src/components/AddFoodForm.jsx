import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 4
function AddFoodForm({ allFood, setFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  function handleNewFoodSubmit(event) {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    console.log('submitted new Food', newFood);
    setFood([newFood, ...allFood]);
  }

  return (
    <form onSubmit={handleNewFoodSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
      />

      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={(event) => setImage(event.target.value)}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={(event) => setCalories(event.target.value)}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={(event) => setServings(event.target.value)}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
