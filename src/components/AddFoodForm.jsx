import React from "react";
import { useState } from "react";

function AddFoodForm({ createFood }) {
  const [nameOfFood, setNameOfFood] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [noOfCalories, setNoOfCalories] = useState(0);
  const [noOfServings, setNoOfServings] = useState(0);
  const handleFoodNameInput = (e) => setNameOfFood(e.target.value);
  const handleFoodImageInput = (e) => setFoodImage(e.target.value);
  const handleNoOfCaloriesInput = (e) => setNoOfCalories(e.target.value);
  const handleNoOfServingsInput = (e) => setNoOfServings(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: nameOfFood,
      image: foodImage,
      calories: noOfCalories,
      servings: noOfServings,
    };
    createFood(newFood);

    setNameOfFood("");
    setFoodImage("");
    setNoOfCalories(0);
    setNoOfServings(0);
  };
  return (
    <div>
      <h4>Add a Food</h4>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={nameOfFood}
          onChange={handleFoodNameInput}
        />
        <br />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={foodImage}
          onChange={handleFoodImageInput}
        />
        <br />
        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={noOfCalories}
          onChange={handleNoOfCaloriesInput}
        />
        <br />
        <label>Servings:</label>
        <input
          type="number"
          name="servings"
          value={noOfServings}
          onChange={handleNoOfServingsInput}
        />
        <br />
        <br />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
