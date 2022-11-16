import { Divider, Input } from 'antd';
import { useState } from 'react';
import React from 'react';

function AddFoodForm(newFood) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newFoods = { name, image, calories, servings };

    newFood(newFoods);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add Food Entry</h4>

        <label htmlFor="name">Name</label>
        <Input value={name} type="text" onChange={handleName} />

        <label htmlFor="image">Image</label>
        <Input value={image} type="text" onChange={handleImage} />

        <label htmlFor="calories">Calories</label>
        <Input value={calories} type="text" onChange={handleCalories} />

        <label htmlFor="servings">Servings</label>
        <Input value={servings} type="text" onChange={handleServings} />

        <button>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
