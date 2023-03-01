import React from 'react';
import { useState } from 'react';
import { Input, Divider } from 'antd';
// name , image , calories and servings.
function AddFoodForm({ addToList }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    console.log(newFood);
    addToList(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label htmlFor="name"> Name</label>
        <Input value={name} type="text" name={name} onChange={handleName} />

        <label htmlFor="image"> Image</label>
        <Input value={image} type="text" name={image} onChange={handleImage} />

        <label htmlFor="calories"> Calories</label>
        <Input
          value={calories}
          type="number"
          name={calories}
          onChange={handleCalories}
        />

        <label htmlFor="servings"> Servings </label>
        <Input
          value={servings}
          type="number"
          name={servings}
          onChange={handleServings}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
