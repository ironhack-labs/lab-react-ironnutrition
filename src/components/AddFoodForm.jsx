import React, { useState } from "react";

function AddFoodForm(props) {
  const { foods, setFoods } = props;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmission = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
      id: image,
    };

    setFoods([newFood, ...foods]);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmission}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        ></input>
      </label>
      <label>
        Image
        <input
          type="text"
          name="image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
          required
        ></input>
      </label>
      <label>
        Calories
        <input
          type="number"
          name="calories"
          onChange={(e) => {
            setCalories(e.target.value);
          }}
          value={calories}
          required
        ></input>
      </label>
      <label>
        Servings
        <input
          type="number"
          name="servings"
          onChange={(e) => {
            setServings(e.target.value);
          }}
          value={servings}
          required
        ></input>
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
