import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 4

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name, calories, image, servings);

    const newFood = {
      name,
      calories,
      image,
      servings,
    };

    console.log(newFood);

    props.setFood([newFood, ...props.food]);

    setName('');
    setCalories(0);
    setImage('');
    setServings(0);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="text"
        onChange={(e) => {
          setCalories(e.target.value);
        }}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="text"
        onChange={(e) => {
          setServings(e.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
