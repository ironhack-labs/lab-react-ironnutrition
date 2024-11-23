import React, { useState } from "react";

function AddFoodForm({ onAddFood }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que servings y calories no sean negativos
    if (Number(formData.servings) < 0 || Number(formData.calories) < 0) {
      alert("Servings y Calories no pueden ser negativos.");
      return;
    }

    onAddFood({
      name: formData.name,
      image: formData.image,
      calories: Number(formData.calories),
      servings: Number(formData.servings),
    });

    setFormData({ name: "", image: "", calories: "", servings: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <label>
        Calories:
        <input
          type="number"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
        />
      </label>
      <label>
        Servings:
        <input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
