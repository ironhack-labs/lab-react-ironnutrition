import React, { useState, useContext } from "react";
import { FoodContext } from "./context/Context";

export const AddFood = () => {
  const { addFood } = useContext(FoodContext);

  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  const [show, setShow] = useState(false);

  const cleanForm = () => {
    setName("");
    setCalories("");
    setImage("");
  };

  const showForm = () => {
    setShow(!show);
    cleanForm();
  };

  const handleSubmit = () => {
    addFood({ name, calories, image });
    setShow(false);
    cleanForm();
  };

  if (!show) {
    return (
      <div className="field">
        <div className="control">
          <button className="button is-link" onClick={() => showForm()}>
            Add Food
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="field">
          <div className="control">
            <button className="button is-danger" onClick={() => showForm()}>
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
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
};
