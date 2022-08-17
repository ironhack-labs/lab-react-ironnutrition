import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const { createFood } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, image, calories, servings };
    createFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label htmlFor="image">Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label htmlFor="calories">Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label htmlFor="servings">Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <button type="submit">Create food</button>
    </form>
  );
}

export default AddFoodForm;
