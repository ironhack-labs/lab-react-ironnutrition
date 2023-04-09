import { useState } from 'react'
import { Divider, Input } from 'antd'

const addedFood = {
  name: '',
  image: '',
  calories: '',
  servings: '',
};

function AddFoodForm({ addFood }) {
  const [food, setFood] = useState(addedFood);

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFood({
      ...food,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFood(food);
    setFood(addedFood);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input value={food.name} id="name" type="text" onChange={handleChange} />

      <label htmlFor="image">Image</label>
      <Input
        value={food.image}
        id="image"
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="calories">Calories</label>
      <Input
        value={food.calories}
        id="calories"
        type="number"
        onChange={handleChange}
      />

      <label htmlFor="servings">Servings</label>
      <Input
        value={food.servings}
        id="servings"
        type="number"
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm