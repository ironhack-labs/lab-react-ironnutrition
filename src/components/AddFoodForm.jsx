import React, { useState } from "react";
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
      servings,
    };

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
          Name:{" "}
          <Input
            type="text"
            name="name"
            onChange={handleNameInput}
            value={name}
          />
        </label>
        <label>
          Image:{" "}
          <Input
            type="text"
            name="image"
            onChange={handleImageInput}
            value={image}
          />
        </label>
        <label>
          Calories:{" "}
          <Input
            type="number"
            name="calories"
            onChange={handleCaloriesInput}
            value={calories}
          />
        </label>
        <label>
          Servings:{" "}
          <Input
            type="number"
            name="servings"
            onChange={handleServingsInput}
            value={servings}
          />
        </label>
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
