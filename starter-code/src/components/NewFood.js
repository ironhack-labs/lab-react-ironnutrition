import React, { useState, useContext } from "react";
import { FoodContext } from "./../contexts/FoodContext";


const NewFood = () => {
  const { addFood } = useContext(FoodContext);
  
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  const [formActive, setFormActive] = useState(false);

  const clearForm = () => {
    setName("");
    setCalories("");
    setImage("");
  };

  const handleActiveForm = () => {
    setFormActive(!formActive);
    clearForm();
  };

  const handleSubmitForm = () => {
    addFood({ name, calories, image });
    setFormActive(false);
    clearForm();
  };



  if (!formActive) {
    return (
      <div className="field">
        <div className="control">
          <button className="button is-link" onClick={() => handleActiveForm()}>
            Add Food
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="field">
          <div className="control">
            <button className="button is-danger" onClick={() => handleActiveForm()}>
              Cancel
            </button>
          </div>
        </div>

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Food name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Calories"
              value={calories}
              onChange={e => setCalories(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Image Url</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Image"
              value={image}
              onChange={e => setImage(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <button
              className="button is-primary"
              onClick={() => handleSubmitForm()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default NewFood;
