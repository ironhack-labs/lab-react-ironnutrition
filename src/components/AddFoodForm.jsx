import React, { useState } from "react";

function AddFoodForm({ onAddFood }) {
  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFood({
      ...newFood,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    onAddFood(newFood);
   
    setNewFood({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newFood.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={newFood.image}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={newFood.calories}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Servings:</label>
        <input
          type="number"
          name="servings"
          value={newFood.servings}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;