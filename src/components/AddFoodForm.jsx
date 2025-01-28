// components/AddFoodForm.jsx
import { useState } from "react";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood({ name, image, calories: parseInt(calories), servings: parseInt(servings) });
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="number"
        name="calories"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <input
        type="number"
        name="servings"
        placeholder="Servings"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
