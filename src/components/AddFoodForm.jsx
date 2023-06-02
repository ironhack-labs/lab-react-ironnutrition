import { Divider, Input } from 'antd';
import React, { useState } from 'react';

function AddFoodForm({ foodList, setFoodList }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');

  function handleNewFood(event) {
    event.preventDefault();
    const newFoodCard = {
      name,
      calories,
      image,
      servings,
    };
    console.log(handleNewFood);
    setFoodList([newFoodCard, ...foodList]);
    setName('');
    setCalories('');
    setImage('');
    setServings('');
  }

  return (
    <form onSubmit={handleNewFood}>
      <Divider>Add Food</Divider>
      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={(event) => {
          setImage(event.target.value);
        }}
      />
      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={(event) => {
          setCalories(event.target.value);
        }}
      />
      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={(event) => {
          setServings(event.target.value);
        }}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
