import "./AddFoodForm.css";
import { useState } from "react";

function AddFoodFrom({ addNewFood }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState();
  const [servings, setServings] = useState();
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      id: Math.random().toString(36),
      name: name,
      calories: calories,
      servings: servings,
      image: image,
    };

    console.log(newFood)
    addNewFood(newFood);

    setName("");
    setCalories();
    setServing();
    setImage("");
  };
  return (
    <div className="add-food-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="calories">Calories: </label>
          <input
            name="calories"
            type="number"
            id="calories"
            value={calories}
            onChange={(e) => setCalories(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="servings">Serving: </label>
          <input
            name="servings"
            type="number"
            id="servings"
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            name="image"
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodFrom;
