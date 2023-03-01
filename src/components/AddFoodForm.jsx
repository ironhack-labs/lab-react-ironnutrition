import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ addFood }) {
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
      const newFood = {name, image, calories, servings}
      addFood(newFood);

      setName("");
      setImage("");
      setCalories(0);
      setServings(0);
  };

  return (

    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Food name</label>
      <Input name='name' value={name} type="text" onChange={handleName} />

      <label htmlFor="image">Image url</label>
      <Input name='image' value={image} type="text" onChange={handleImage} />

      <label htmlFor="calories">Calories</label>
      <Input name='calories' value={calories} type="number" onChange={handleCalories} />

      <label htmlFor="servings">Servings</label>
      <Input name='servings' value={servings} type="number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
