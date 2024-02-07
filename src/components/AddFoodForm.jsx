import React from "react";
import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  function addFood(e) {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    props.setFood([newFood, ...props.foods]);
  }

  return (
    <div>
      <form onSubmit={addFood} className="addForm">
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </label>
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
