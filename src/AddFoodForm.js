import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ setFoodList, foodList }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  return (
    <div>
      <p>Name</p>
      <Input
        value={name}
        type="text"
        onChange={(evt) => setName(evt.target.value)}
      />
      <p>Image</p>
      <Input
        value={image}
        type="text"
        onChange={(evt) => setImage(evt.target.value)}
      />
      <p>Calories</p>
      <Input
        value={calories}
        type="number"
        onChange={(evt) => setCalories(evt.target.value)}
      />
      <p>Servings</p>
      <Input
        value={servings}
        type="number"
        onChange={(evt) => setServings(evt.target.value)}
      />
      <Button
        type="submit"
        onClick={() => {
          setFoodList((list) => [{ name, image, calories, servings }, ...list]);
        }}
      >
        Create
      </Button>
    </div>
  );
}

export default AddFoodForm;
