import { Input } from 'antd';
import { useState } from 'react';
import React from 'react';

function AddFoodForm({ newFood, setNewFood, setFood, food }) {
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodImage, setNewFoodImage] = useState('');
  const [newFoodCalories, setNewFoodCalories] = useState('');
  const [newFoodServings, setNewFoodServings] = useState('');

  function createButton(event) {
    event.preventDefault();
    const newForm = {
      name: newFoodName,
      image: newFoodImage,
      calories: newFoodCalories,
      servings: newFoodServings,
    };

    setFood([newForm, ...food]);
    setNewFoodName('');
    setNewFoodImage('');
    setNewFoodCalories('');
    setNewFoodServings('');
  }
  return (
    <div>
      <form
        onSubmit={createButton}
        className="input"
        style={{ width: '800px' }}
      >
        <label>Name</label>
        <Input
          value={newFoodName}
          type="text"
          onChange={(event) => {
            setNewFoodName(event.target.value);
          }}
        />
        <label>Image</label>
        <Input
          value={newFoodImage}
          type="text"
          onChange={(event) => {
            setNewFoodImage(event.target.value);
          }}
        />
        <label>Calories</label>
        <Input
          value={newFoodCalories}
          type="number"
          onChange={(event) => {
            setNewFoodCalories(event.target.value);
          }}
        />
        <label>Servings</label>
        <Input
          value={newFoodServings}
          type="number"
          onChange={(event) => {
            setNewFoodServings(event.target.value);
          }}
        />
        <button type="submit"> Create </button>
      </form>
    </div>
  );
}

export default AddFoodForm;
