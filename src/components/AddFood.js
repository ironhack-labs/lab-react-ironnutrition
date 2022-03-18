import React from 'react';
import { useState } from 'react';

export const AddFood = (props) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image, quantity };
    props.addFood(newFood);

    setName('');
    setCalories('');
    setImage('');
  };

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);

  return (
    <div
      style={{
        margin: '80px 0 30px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <form onSubmit={handleSubmit}>
        <label for="name">Name: </label>
        <input
          type="text"
          name="name"
          vale={name}
          onChange={handleNameInput}
        ></input>

        <label for="calories">Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        ></input>

        <label for="image">Image URL: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        ></input>

        <button type="submit">Add food</button>
      </form>
    </div>
  );
};
