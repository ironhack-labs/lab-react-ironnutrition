import React from 'react';
import { Input } from 'antd';

const AddFoodForm = ({ foods, setFoods }) => {
  const formItem = [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Calories',
      name: 'calories',
    },
    {
      label: 'Image',
      name: 'image',
    },
    {
      label: 'Servings',
      name: 'servings',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value,
      servings: event.target.servings.value,
    };
    setFoods([newFood, ...foods]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Food Entry</h1>
      {formItem.map((item) => (
        <div key={item.name}>
          <label htmlFor={item.name}>{item.label}</label>
          <Input type="text" id={item.name} name={item.name} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddFoodForm;
