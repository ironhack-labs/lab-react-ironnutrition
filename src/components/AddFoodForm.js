import { useState } from 'react';
import React from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(food) {
  const [Name, setName] = useState('');
  const [Image, setImage] = useState('');
  const [Calories, setCalories] = useState('');
  const [Servings, setServings] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();

    const newFood = { 
      name: Name, 
      image: Image, 
      calories: Calories, 
      servings: Servings 
    };

    food.addFood(newFood);
  };

  return (
    <form onSubmit={handelSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <input
        value={food.name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label>Image</label>
      <input
        value={food.image}
        type="text"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />

      <label>Calories</label>
      <input
        value={food.calories}
        type="number"
        onChange={(e) => {
          setCalories(e.target.value);
        }}
      />

      <label>Servings</label>
      <input
        value={food.servings}
        type="number"
        min="1"
        max="10"
        onChange={(e) => {
          setServings(e.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
