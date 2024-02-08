import { useState } from "react";

export default function AddFoodForm({ onAddFood }) {
  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood({
      name: newFood.name,
      image: newFood.image,
      calories: newFood.calories,
      servings: newFood.servings,
    });
    setNewFood({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <div>
      <h2>Add Food Entry</h2>
      <form onSubmit={handleSubmit} className="Form">
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={newFood.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Image
          <input
            name="image"
            type="url"
            placeholder="https://example.com"
            value={newFood.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Calories
          <input
            name="calories"
            type="number"
            placeholder="0"
            value={newFood.calories}
            onChange={handleChange}
          />
        </label>

        <label>
          Servings
          <input
            name="servings"
            type="number"
            placeholder="0"
            value={newFood.servings}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
