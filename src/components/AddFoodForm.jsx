import React, { useState } from "react";

const AddFoodForm = ({ onAddFood }) => {
  const [foodData, setFoodData] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFoodData({
      ...foodData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Llama a la función para agregar el nuevo alimento
    onAddFood(foodData);
    // Restablece los campos del formulario
    setFoodData({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          value={foodData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Imagen:</label>
        <input
          type="text"
          name="image"
          value={foodData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="calories">Calorías:</label>
        <input
          type="number"
          name="calories"
          value={foodData.calories}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="servings">Porciones:</label>
        <input
          type="number"
          name="servings"
          value={foodData.servings}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;