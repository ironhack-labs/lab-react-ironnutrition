import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ callbackToCreate }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    callbackToCreate(newFood);

    //clear form
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        key="name"
        type="text"
        name="name"
        placeholder="enter the name"
        onChange={(e) => { setName(e.target.value) }}
      />

      <label>Image</label>
      <Input
        value={image}
        type="text"
        name="image"
        placeholder="enter the image"
        onChange={(e) => { setImage(e.target.value) }}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="text"
        placeholder="enter number of calories"
        onChange={(e) => {setCalories(e.target.value)}}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={(e) => { setServings(e.target.value) }}
      />

      <button type="submit">Create</button>
    </form>
  )
}

export default AddFoodForm;
