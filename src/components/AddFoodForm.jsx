import React from 'react'
import { Divider, Input } from 'antd';
import { useState } from 'react';
import foods from '../foods.json';

function AddFoodForm({ addToList }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [serving, setServing] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServing = (e) => setServing(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, image, calories, serving };
    addToList(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServing(0);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" onChange={handleName} />

        <label>Image</label>
        <Input value={image} type="text" onChange={handleImage} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={handleCalories} />

        <label>Servings</label>
        <Input value={serving} type="text" onChange={handleServing} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm