import React, { useState } from "react";

export const AddFood = props => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let foodInfo = {
      name,
      calories,
      image
    };

    props.includeFood(foodInfo);
    props.closeForm();
  }

  function handleName(event) {
    setName(event.target.value);
  }
  function handleCalories(event) {
    setCalories(event.target.value);
  }
  function handleImage(event) {
    setImage(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="input1">Name:</label>
        <input
          type="text"
          className="form-control"
          id="input1"
          value={name}
          onChange={handleName}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="input2">Number Of Calories:</label>
        <input
          type="text"
          className="form-control"
          id="input2"
          value={calories}
          onChange={handleCalories}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="input3">Add Image</label>
        <input
          type="text"
          className="form-control"
          id="input3"
          value={image}
          onChange={handleImage}
        ></input>
      </div>
      <button type="submit" className="btn btn-dark">
        Create a new food
      </button>
    </form>
  );
};
