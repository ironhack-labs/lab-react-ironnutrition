// AddFoodForm.jsx
import React, { useState } from 'react';


function AddFoodForm({ onAddFood }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { ...formData };
    onAddFood(newFood);
    setFormData({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Enter image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          name="calories"
          placeholder="Enter calories"
          value={formData.calories}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          id="servings"
          name="servings"
          placeholder="Enter servings"
          value={formData.servings}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default AddFoodForm;
