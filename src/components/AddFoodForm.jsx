/* eslint-disable no-unused-vars */
// Your code here
import React from "react";
import { useState } from "react";

function AddFoodForm(props) {
  function handleSubmit(e) {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    props.setFood([newFood, ...props.food]);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  }

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  return (
    <div>
      <form onSubmit={handleSubmit} className="foodForm">
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>

        <label>
          Image
          <input
            type="text"
            name="image"
            placeholder="Image Url"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
          />
        </label>

        <label>
          Calories
          <input
            type="number"
            name="calories"
            placeholder="Calories"
            onChange={(e) => {
              setCalories(e.target.value);
            }}
            value={calories}
          />
        </label>

        <label>
          Servings
          <input
            type="number"
            name="servings"
            placeholder="Servings"
            onChange={(e) => {
              setServings(e.target.value);
            }}
            value={servings}
          />
        </label>

        <button>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
