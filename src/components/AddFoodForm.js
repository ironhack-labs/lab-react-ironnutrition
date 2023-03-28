import React from 'react';
import { useState } from 'react';
import { Input } from 'antd';

const emptyForm = {
  name: '',
  image: '',
  calories: '',
  servings: ''
}

export default function AddFoodForm({ addFood }) {
  const [newFood, setNewFood] = useState(emptyForm);
  const [seeAddForm, setSeeAddForm] = useState(false);

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

  if (seeAddForm) {
    return (
      <form onSubmit={handleSubmit} className="container w-50">
        <label>Name</label>
        <Input value={newFood.name} id="name" type="text" onChange={handleNameChange} />
  
        <label className='mt-3'>Image</label>
        <Input value={newFood.image} id="image" type="text" onChange={handleImageChange} />
  
        <label className='mt-3'>Calories</label>
        <Input value={newFood.calories} id="calories" type="number" onChange={handleCaloriesChange} />
  
        <label className='mt-3'>Servings</label>
        <Input value={newFood.servings} id="servings" type="number" onChange={handleServingsChange} />
  
        <button type="submit" className='btn btn-primary my-3 w-100'>Create</button>
        <button onClick={() => setSeeAddForm(!seeAddForm)} className="btn btn-outline-secondary w-100">Hide form</button>
      </form>
    )
  } else {
    return (
      <div className='container w-50'>
        <button onClick={() => setSeeAddForm(!seeAddForm)} className="btn btn-secondary my-2 w-100">Add New Food</button>
      </div>
    )
  }
  
}
