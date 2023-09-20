import React, { useState } from "react";

function AddFoodForm({ onAddFood }) {
  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddFood(newFood);

    setNewFood({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <div>
      <h2>Add New Food</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newFood.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={newFood.image}
          onChange={handleChange}
          required
        />
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={newFood.calories}
          onChange={handleChange}
          required
        />
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          id="servings"
          name="servings"
          value={newFood.servings}
          onChange={handleChange}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
