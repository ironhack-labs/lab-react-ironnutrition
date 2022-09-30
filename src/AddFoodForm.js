import React, { useState } from 'react';
import { Input, Button, Divider } from 'antd';

function AddFoodForm({ setFoodList, foodList }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  return (
    <form>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(evt) => setName(evt.target.value)}
      />
      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={(evt) => setImage(evt.target.value)}
      />
      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={(evt) => setCalories(evt.target.value)}
      />
      <label>Servings</label>
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
    </form>
  );
}

export default AddFoodForm;
