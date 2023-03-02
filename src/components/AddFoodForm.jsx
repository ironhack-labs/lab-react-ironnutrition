import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ foods, setFoods }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleForms = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };

    const copy = [...foods]; //crate a new array with the value of foods array that is comming from the App.js
    copy.push(newFood); // now the value of your copy array is the foods plus the object newFood
    setName('');
    setImage('');
    setCalories('');
    setServings('');
    setFoods(copy);
    console.log(newFood);
  };

  return (
    <form onSubmit={handleForms}>
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
        type="number"
        onChange={(e) => {
          setCalories(e.target.value);
        }}
      />
      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={(e) => {
          setServings(e.target.value);
        }}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;