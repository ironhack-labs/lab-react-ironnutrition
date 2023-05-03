import React, { useState } from 'react';
import { Input, Button, Divider } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };
    props.onAddFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Food name"
      />

      <label>Image</label>
      <Input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        placeholder="Image URL"
      />

      <label>Calories</label>
      <Input
        type="number"
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
        placeholder="Calories"
      />

      <label>Servings</label>
      <Input
        type="number"
        value={servings}
        onChange={(event) => setServings(event.target.value)}
        placeholder="Servings"
      />
      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
