import React, { useState } from "react";

function AddFoodForm(props) {
  const [foodData, setFoodData] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFoodData((prevFoodData) => ({
      ...prevFoodData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addFood(foodData);
    setFoodData({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={foodData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={foodData.image}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Calories:
        <input
          type="number"
          name="calories"
          value={foodData.calories}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Servings:
        <input
          type="number"
          name="servings"
          value={foodData.servings}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
