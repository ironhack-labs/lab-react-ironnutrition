import React, { useState } from 'react';

function AddFoodForm({ onAddFood }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddFood(formData);
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
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          id="servings"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
