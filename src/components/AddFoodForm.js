import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ foodList, setFoodList }) {
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodImage, setNewFoodImage] = useState('');
  const [newFoodCalories, setNewFoodCalories] = useState('');
  const [newFoodServings, setNewFoodServings] = useState('');

  function addFoodItemToArray(e) {
    e.preventDefault();
    const newFoodItem = {
      name: newFoodName,
      image: newFoodImage,
      calories: newFoodCalories,
      servings: newFoodServings,
    };
    setFoodList([...foodList, newFoodItem]);
  }

  return (
    <form onSubmit={(e) => addFoodItemToArray(e)}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={newFoodName}
        type="text"
        onChange={(e) => {
          setNewFoodName(e.target.value);
        }}
      />

      <label>Image</label>
      <Input
        value={newFoodImage}
        type="text"
        onChange={(e) => {
          setNewFoodImage(e.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        value={newFoodCalories}
        type="number"
        onChange={(e) => {
          setNewFoodCalories(e.target.value);
        }}
      />

      <label>Servings</label>
      <Input
        value={newFoodServings}
        type="number"
        onChange={(e) => {
          setNewFoodServings(e.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
