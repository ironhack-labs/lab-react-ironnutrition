// AddFoodForm.js
import React, { useState } from "react";
import { Input, Divider } from "antd";

const AddFoodForm = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    props.addFood(newFood); 
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={(e) => setServings(e.target.value)}
        placeholder="Servings"
      />
      <button type="submit">Add Food</button>
    </form>
  );
};

export default AddFoodForm;
