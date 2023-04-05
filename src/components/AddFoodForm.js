import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleAddFood = () => {
    const newFood = { name, image, calories, servings };
    onAddFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(1);
  };

  return (
    <div>
      <h2>Add a new food:</h2>
      <div>
        <label>Name:</label>
        <Input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Image:</label>
        <Input
          value={image}
          type="text"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label>Calories:</label>
        <Input
          value={calories}
          type="number"
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div>
        <label>Servings:</label>
        <Input
          value={servings}
          type="number"
          onChange={(e) => setServings(e.target.value)}
        />
      </div>
      <Button onClick={handleAddFood}>Add Food</Button>
    </div>
  );
}

export default AddFoodForm;
