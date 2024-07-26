import React, { useState } from "react";

function AddFoodForm({ onAdd }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Math.random().toString(36).substring(2, 9),
      name,
      image,
      calories: parseInt(calories),
      servings: parseInt(servings),
    });
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <br />
      <label>
        Calories:
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </label>
      <br />
      <label>
        Servings:
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
