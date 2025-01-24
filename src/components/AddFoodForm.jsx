import { Divider, Input, Button } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddFoodForm({ addFood }) {
  const emptyFood = {
    id: "",
    name: "",
    calories: "",
    image: "",
    servings: "",
  };

  const [food, setFood] = useState(emptyFood);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { ...food, id: uuidv4() };
    addFood(newFood);
    setFood(emptyFood);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={food.name} type="text" onChange={handleChange} />

      <label>Image</label>
      <Input name="image" value={food.image} type="text" onChange={handleChange} />

      <label>Calories</label>
      <Input name="calories" value={food.calories} type="number" onChange={handleChange} />

      <label>Servings</label>
      <Input name="servings" value={food.servings} type="number" onChange={handleChange} />

      <Button htmlType="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
