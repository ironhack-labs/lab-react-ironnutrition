import { useState } from 'react';
import React from 'react';
import { Divider, Input } from 'antd';

const empty = {
  name: '',
  image: '',
  calories: '',
  servings: '',
};

function AddFoodForm({ addFood }) {
  const [food, setFood] = useState(empty);

  const handleChange = (ev) => {
    const key = ev.target.id;
    const value = ev.target.value;

    setFood({
      ...food,
      [key]: value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addFood(food);
    setFood(empty);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Foos Entry</Divider>

      <label>Name</label>
      <Input value={food.name} type="text" onChange={handleChange} id="name" />

      <label>Image</label>
      <Input
        value={food.image}
        type="text"
        onChange={handleChange}
        id="image"
      />

      <label>Calories</label>
      <Input
        value={food.calories}
        type="number"
        onChange={handleChange}
        id="calories"
      />

      <label>Servings</label>
      <Input
        value={food.servings}
        type="number"
        onChange={handleChange}
        id="servings"
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
