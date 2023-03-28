import React from 'react';
import { useState } from 'react';
import { Button, Input } from 'antd';

const emptyForm = {
  name: '',
  image: '',
  calories: '',
  servings: ''
}

export default function AddFoodForm({ addFood }) {
  const [newFood, setNewFood] = useState(emptyForm);

  const handleNameChange = (event) => {
    let value = event.target.value;

    setNewFood({
      ...newFood,
      'name': value,
    })
  };

  const handleImageChange = (event) => {
    let value = event.target.value;

    setNewFood({
      ...newFood,
      'image': value,
    })
  };

  const handleCaloriesChange = (event) => {
    let value = event.target.value;

    setNewFood({
      ...newFood,
      'calories': value,
    })
  };

  const handleServingsChange = (event) => {
    let value = event.target.value;

    setNewFood({
      ...newFood,
      'servings': value,
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFood(newFood);
    setNewFood(emptyForm);
  };
  
  return (
    <form onSubmit={handleSubmit} className="container w-50">
      <label>Name</label>
      <Input value={newFood.name} id="name" type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={newFood.image} id="image" type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={newFood.calories} id="calories" type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={newFood.servings} id="servings" type="number" onChange={handleServingsChange} />

      <button type="submit" className='btn btn-primary my-4 w-100'>Create</button>
    </form>
  )
}
