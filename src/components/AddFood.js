import React from 'react';
import { useState } from 'react';

function AddFood(props) {
  const [nameInput, setNameInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState('');
  const [imageInput, setImageInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: nameInput,
      calories: caloriesInput,
      image: imageInput,
    };

    props.createFood(newFood);
    clearForm();
  };

  const clearForm = () => {
    setNameInput('');
    setCaloriesInput('');
    setImageInput('');
  };

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handleCaloriesInput = (e) => {
    setCaloriesInput(e.target.value);
  };

  const handleImageInput = (e) => {
    setImageInput(e.target.value);
  };

  return (
    <div className="AddFood">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={nameInput}
            onChange={handleNameInput}
          />
        </label>

        <label>
          Calories:
          <input
            type="number"
            name="calories"
            min={1}
            value={caloriesInput}
            onChange={handleCaloriesInput}
          />
        </label>

        <label>
          Image:
          <input
            type="url"
            name="image"
            placeholder="paste the image url"
            value={imageInput}
            onChange={handleImageInput}
          />
        </label>

        <button type="submit">Add a Food</button>
      </form>
    </div>
  );
}

export default AddFood;
