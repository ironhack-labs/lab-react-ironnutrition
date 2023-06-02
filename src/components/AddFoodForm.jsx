import { useState } from 'react';
import { Input, Divider } from 'antd';

function AddFoodForm({ foods, setFoods }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    setFoods([newFood, ...foods]);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  }

  return (
    <div>
      <h4>Add new food</h4>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <label>
          <h4>Name:</h4>
          <Input
            type="text"
            value={name}
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          <h4>Image URL:</h4>
          <Input
            type="text"
            name="image"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        <label>
          <h4>Calories:</h4>
          <Input
            type="number"
            name="calories"
            min={0}
            value={calories}
            onChange={(event) => {
              setCalories(Number(event.target.value));
            }}
          />
        </label>
        <label>
          <h4>Servings:</h4>
          <Input
            type="number"
            name="servings"
            min={0}
            checked={servings}
            onChange={(event) => {
              setServings(Number(event.target.value));
            }}
          />
        </label>
        <button type="submit">Add new Food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
