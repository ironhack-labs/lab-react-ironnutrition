import React, { useState } from 'react';
import { Input } from 'antd';

function AddFoodForm({ addToList }) {
  //create state for inputs
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  //handler functions
  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the reload of the page
    const newFood = { name, image, calories, servings };

    console.log(newFood);
    addToList(newFood);

    //clears inputs after adding a new movie
    setName('');
    setImage('');
    setCalories('1');
    setServings('1');
  };

  return (
    <div>
      <h2>Add Food Entry</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input value={name} type="text" name="name" onChange={handleName} />

        <label htmlFor="image">Image</label>
        <Input value={image} type="text" name="image" onChange={handleImage} />

        <label htmlFor="calories">Calories</label>
        <Input
          value={calories}
          name="calories"
          type="number"
          min="1"
          onChange={handleCalories}
        />

        <label htmlFor="servings">Servings</label>
        <Input
          value={servings}
          name="servings"
          type="number"
          min="1"
          onChange={handleServings}
        />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
