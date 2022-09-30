import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ name, image, calories, servings }) {
  const [newFood, setNewFood] = useState({});
  //   const [nameo, setName] = useState('');
  //   const [image, setImage] = useState('');
  //   const [calories, setCalories] = useState(0);
  //   const [servings, setServings] = useState(0);

  // const newName = (e) => newFood.name(e.target.value);
  //   const newImage = (e) => setImage(e.target.value);
  //   const newCalories = (e) => setCalories(e.target.value);
  //   const newServings = (e) => setServings(e.target.value);

  console.log('Name:', newFood.name);

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={() => {}} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={() => {}} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={() => {}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
