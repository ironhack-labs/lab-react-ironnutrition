// Your code here
import React, { useState } from 'react';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
    };

    onAddFood(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div>
        <label>Servings:</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
