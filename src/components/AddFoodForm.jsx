import React from "react";
import { useState } from "react";

function FoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const newFood = {
    name: name,
    image: image,
    calories: calories,
    servings: servings,
  };
  //onAddFood(newFood);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>Name:</label>
      <input
        onChange={(event) => handleInputChange(event, setName)}
        type="text"
        name="name"
      />

      <label>Image:</label>
      <input
        onChange={(event) => handleInputChange(event, setImage)}
        type="text"
        name="image"
      />

      <label>Calories:</label>
      <input
        onChange={(event) => handleInputChange(event, setCalories)}
        type="number"
        name="calories"
      />

      <label>Servings:</label>
      <input type="number" name="servings " />

      <button type="">Create</button>
    </form>
  );
}

export default FoodForm;
