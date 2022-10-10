import React, { useState } from 'react';
import { Divider, Input } from 'antd';

const AddFoodForm = (props) => {
  const { addFood } = props;
  const [foodForm, setfoodForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addFood(foodForm);
  };
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setfoodForm({
      ...foodForm,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{ width: '75%', margin: '0 auto' }}
    >
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input
        name="name"
        value={foodForm.name}
        type="text"
        onChange={handleInputChange}
        style={{ marginBottom: '20px' }}
      />
      <label>Image</label>
      <Input
        name="image"
        value={foodForm.image}
        type="text"
        onChange={handleInputChange}
        style={{ marginBottom: '20px' }}
      />
      <label>Calories</label>
      <Input
        name="calories"
        value={foodForm.calories}
        type="number"
        onChange={handleInputChange}
        style={{ marginBottom: '20px' }}
      />
      <label>Servings</label>
      <Input
        name="servings"
        value={foodForm.servings}
        type="number"
        onChange={handleInputChange}
        style={{ marginBottom: '20px' }}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
