
import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };

  const handleServingsChange = (event) => {
    setServings(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    };
    props.onAddFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Name" value={name} onChange={handleNameChange} />
      <Input placeholder="Image URL" value={image} onChange={handleImageChange} />
      <Input placeholder="Calories" value={calories} onChange={handleCaloriesChange} type="number" />
      <Input placeholder="Servings" value={servings} onChange={handleServingsChange} type="number" />
      <Button type="primary" htmlType="submit">Add Food</Button>
    </form>
  );
}

export default AddFoodForm;