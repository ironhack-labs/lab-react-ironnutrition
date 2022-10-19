import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ createFunction }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    createFunction(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        placeholder="Enter the name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label>Image</label>

      <Input
        value={image}
        type="text"
        placeholder="Enter image URL"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />

      <label>Calories</label>

      <Input
        type="number"
        value={calories}
        placeholder="Enter calories"
        onChange={(e) => {
          setCalories(e.target.value);
        }}
      />

      <label>Servings</label>

      <Input
        type="number"
        value={servings}
        placeholder="Enter servings"
        onChange={(e) => {
          setServings(e.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
