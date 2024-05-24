import { useState } from "react";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      id: Math.random().toString(),
      name: name,
      calories: calories,
      image: image,
      servings: servings
    };

    addFood(newFood);

    setName("");
    setCalories(0);
    setImage("");
    setServings(0);
  };

  return (
    <form className="add-food" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        placeholder="Enter food name"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        id="calories"
        name="calories"
        value={calories}
        placeholder="Enter calories"
        onChange={(e) => setCalories(Number(e.target.value))}
      />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        placeholder="Enter image URL"
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="servings">Servings</label>
      <input
        type="number"
        id="servings"
        name="servings"
        value={servings}
        placeholder="Enter servings"
        onChange={(e) => setServings(Number(e.target.value))}
      />
      <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFoodForm;