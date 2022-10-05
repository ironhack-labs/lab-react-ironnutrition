import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ addFood }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newFood = {
      name: form.name,
      image: form.image,
      calories: form.calories,
      servings: form.servings,
    };
    addFood(newFood);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={form.name}
        type="text"
        name="name"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        value={form.image}
        type="text"
        name="image"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        value={form.calories}
        type="text"
        name="calories"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        value={form.servings}
        type="text"
        name="servings"
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
