import React from 'react'
import { Divider, Input } from 'antd/lib';
import { useState } from 'react';
function AddFoodForm(props) {

  const { addedFood } = props;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, image, calories, servings };
    addedFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" name="name" onChange={handleName} />

        <label>Image</label>
        <Input value={image} type="text" name="image" onChange={handleImage} />

        <label>Calories</label>
        <Input value={calories} type="number" name="calories" onChange={handleCalories} />

        <label>Servings</label>
        <Input value={servings} type="number" name="servings" onChange={handleServings} />


        <button type="submit">Create</button>
      </form>
    </div >
  );
}



export default AddFoodForm