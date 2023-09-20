// Your code here
import { useState } from "react";

export default function AddFood({ food, addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCalorieInput = (e) => setCalories(e.target.value);
  const handleServingInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    addFood(newFood);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <h4>Add a Food</h4>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label>Image: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <label>Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalorieInput}
        />

        <label>Servings: </label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingInput}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
