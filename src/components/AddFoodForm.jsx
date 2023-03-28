import { Divider, Input } from 'antd';
import { useState } from 'react';

const initialState = {
  name: '',
  image: '',
  calories: '',
  servings: '',
};

const AddFoodForm = ({ addFood }) => {
  const [food, setFood] = useState(initialState);

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setFood((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAddFood = (e) => {
    e.preventDefault();

    addFood(food);
    setFood(initialState);
  };

  return (
    <form onSubmit={handleAddFood}>
      <Divider>
        <h1>Add Food Entry</h1>
      </Divider>

      <label>Name</label>
      <Input value={food.name} type="text" id="name" onChange={handleChange} />

      <label>Image</label>
      <Input
        value={food.image}
        type="text"
        id="image"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        value={food.calories}
        type="number"
        id="calories"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        value={food.servings}
        type="number"
        id="servings"
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
