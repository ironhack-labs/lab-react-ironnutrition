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
    const form = event.target;
    const formData = new FormData(form);
    const newFood = {};
    formData.forEach((value, key) => {
      newFood[key] = value;
    });
    setFoods([...foods, newFood]);
    form.reset();
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
