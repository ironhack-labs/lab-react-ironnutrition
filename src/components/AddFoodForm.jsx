// Your code here
import { useState } from "react";

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name,
      image,
      calories,
      servings,
    };

    onAddFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image</label>
      <input
        name="image"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Calories</label>
      <input
        name="calories"
        type="number"
        value={calories}
        onChange={(e) => setCalories(Number(e.target.value))}
      />

      <label>Servings</label>
      <input
        name="servings"
        type="number"
        value={servings}
        onChange={(e) => setServings(Number(e.target.value))}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
