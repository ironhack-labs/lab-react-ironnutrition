// Your code here

import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };

  const handleServingsInput = (e) => {
    setServings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings
    }

    props.addNewFood(newFood);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <div>
      <Divider>Add Food Entry</Divider>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          ></Input>
        </label>
        <label>
          image Url:
          <Input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          ></Input>
        </label>
        <label>
          Calories:
          <Input
            type="text"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          ></Input>
        </label>
        <label>
          Servings:
          <Input
            type="text"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          ></Input>
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
