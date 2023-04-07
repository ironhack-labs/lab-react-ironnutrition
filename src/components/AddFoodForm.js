import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm({ setFoods }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState();
  const [servings, setServings] = useState();

  const handleSubmit = (e) => {
    e.preventDefault(); //serve p pagina nao reiniciar

    const newFood = {
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };

    setFoods((prev) => [newFood, ...prev]); //prev= previous state

    //to clean the inputs
    setName('');
    setImage('');
    setCalories();
    setServings();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const handleServingsChange = (e) => {
    setServings(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
