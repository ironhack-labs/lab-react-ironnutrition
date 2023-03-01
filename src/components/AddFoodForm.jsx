import React, { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  //Handler Functions

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  //Handler for submit

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = { name, image, calories, servings };

    setName('');
    setImage('');
    setCalories(0);
    setServings(false);
  };

  // const addToList = (foods) =>

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name"> Name </label>
      <Input value={name} type="text" onChange={handleName} />

      <label htmlFor="image"> Image </label>
      <Input value={image} type="text" onChange={handleImage} />

      <label htmlFor="calories"> Calories </label>
      <Input
        value={calories * servings}
        type="number"
        onChange={handleCalories}
      />

      <label htmlFor="servings"> Servings </label>
      <Input value={servings} type="number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
