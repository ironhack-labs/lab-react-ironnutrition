import React, { useState, useContext } from "react";
import { FoodContext } from "./FoodContext";

const AddNewFood = () => {
  const { foods, setFoods } = useContext(FoodContext);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  const handleOpen = () => setOpen(!open);
  const handleCancel = e => {
    e.preventDefault();
    closeForm();
  };
  const handleChangeName = e => setName(e.target.value);
  const handleChangeCalories = e => setCalories(e.target.value);
  const handleChangeImage = e => setImage(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    setFoods([...foods, { ...{ name, calories, image, quantity: 0 } }]);
    closeForm();
  };
  const closeForm = () => {
    setName("");
    setCalories("");
    setImage("");
    setOpen(false);
  };

  if (!open)
    return (
      <button className="button" onClick={handleOpen}>
        Add new food
      </button>
    );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Food name"
              value={name}
              onChange={handleChangeName}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Number of calories"
              value={calories}
              onChange={handleChangeCalories}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="URL of the image"
              value={image}
              onChange={handleChangeImage}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewFood;
