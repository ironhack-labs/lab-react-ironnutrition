import React, { useState } from 'react';
import { Divider, Input, Button } from 'antd';

function AddFoodForm({ handleCreate }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 1,
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(form);
    setForm({
      name: '',
      image: '',
      calories: 0,
      servings: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={form.name} type="text" onChange={handleChange} />

      <label>Image</label>
      <Input name="image" value={form.image} type="text" onChange={handleChange} />

      <label>Calories</label>
      <Input name="calories" value={form.calories} type="number" onChange={handleChange} />

      <label>Servings</label>
      <Input name="servings" value={form.servings} type="number" onChange={handleChange} />

      <Button type="primary" htmlType="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
