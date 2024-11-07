// Your code here

import { useState } from "react";
import { Divider, Input, Button } from "antd";

const AddFoodForm = ({ addFood }) => {
  const [food, setFood] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  function handleChange(e) {
    food[e.target.name] = e.target.value;

    setFood({ ...food });
  }

  function handleSubmit() {
    addFood(food);
    setFood({ name: "", image: "", calories: 0, servings: 0 });
  }

  return (
    <div>
      <Divider>Add Food Entry</Divider>
      <form className="food-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <Input
          type="text"
          name="name"
          id="name"
          value={food.name}
          onChange={handleChange}
        />
        <label htmlFor="image">Image :</label>
        <Input
          type="text"
          name="image"
          id="image"
          value={food.image}
          onChange={handleChange}
        />
        <label htmlFor="calories">Calories :</label>
        <Input
          type="number"
          name="calories"
          id="calories"
          value={food.calories}
          onChange={handleChange}
        />
        <label htmlFor="servings">Servings :</label>
        <Input
          type="number"
          name="servings"
          id="servings"
          value={food.servings}
          onChange={handleChange}
        />

        <Button id="create-food-button" onClick={handleSubmit}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default AddFoodForm;
