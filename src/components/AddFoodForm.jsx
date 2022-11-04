import { useState } from 'react';
import { Divider, Input } from 'antd';

const defaultFood = {
  name: '',
  image: '',
  calories: 0,
  servings: 0,
};

export const AddFoodForm = (props) => {
  const [newFood, setNewfood] = useState(defaultFood);
  // const [name, setName] = useState('');
  // const [image, setImage] = useState('');
  // const [calories, setCalories] = useState(0);
  // const [servings, setServings] = useState(0);

  // const handleNameInput = (event) => setName(event.target.tvalue);
  // const handleImageInput = (event) => setImage(event.target.tvalue);
  // const handleCaloriesInput = (event) => setCalories(event.target.tvalue);
  // const handleServingsInput = (event) => setServings(event.target.tvalue);

  const handleChange = (event) => {
    setNewfood((old) => {
      let newValue = event.target.value;
      return { ...old, [event.target.name]: newValue };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted: ', newFood);
    props.addNewFood(newFood);
    setNewfood(defaultFood);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={newFood.name}
        type="text"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        name="image"
        value={newFood.image}
        type="text"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={newFood.calories}
        type="number"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={newFood.servings}
        type="number"
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
};
