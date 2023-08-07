import React, { useState } from 'react';
import { Divider, Input, Button } from 'antd';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    onAddFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  
  return (
   <div className="center-form">
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Image</label>
      <Input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Calories</label>
      <Input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <label>Servings</label>
      <Input
        type="number"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />

        <button type="submit">Create</button>
      {/* <Button type="primary" htmlType="submit">
        Create
      </Button> */}
    </form>
   </div>
  );
}

export default AddFoodForm;