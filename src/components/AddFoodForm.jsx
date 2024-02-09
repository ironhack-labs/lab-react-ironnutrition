// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const AddFoodForm = ({ addFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    addFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          id="servings"
          name="servings"
          value={servings}
          onChange={(e) => setServings(Number(e.target.value))}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
