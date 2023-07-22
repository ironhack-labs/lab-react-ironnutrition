import React, { useState } from 'react';
import { Divider, Input } from 'antd';


export default function AddFoodForm( { addNewFood } ) {

  const [name, setName] = useState(() => '');
  const [image, setImage] = useState(() => '');
  const [calories, setCalories] = useState(() => 0);
  const [servings, setServings] = useState(() => 0);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleImageInput = (e) => {
    setImage(e.target.value);
  };
  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };
  const handleServingsInput = (e) => {
    setServings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, image, calories, servings };
    addNewFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  }

  return (
   <form onSubmit={(e) => handleSubmit(e)}>
    <Divider>Add Food Entry</Divider>

<label>Name</label>
<Input name='name' value={name} type="text" onChange={handleNameInput} />

<label>Image</label>
<Input name='image' value={image} type='text' onChange={handleImageInput} />


<label>Calories</label>
<Input name='calories' value={calories} type='number' onChange={handleCaloriesInput} />

<label>Servings</label>
<Input name='servings' value={servings} type='number' onChange={handleServingsInput} />

<button type="submit">Create</button>
   </form>
  );
}
