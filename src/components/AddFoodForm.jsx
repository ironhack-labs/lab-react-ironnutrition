import React, { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    props.addFood(newRecipe);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div className="AddFoodForm">
      <h3>Add a new recipe here</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <label>Servings:</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
export default AddFoodForm;
