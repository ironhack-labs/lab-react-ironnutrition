import React, { useState, useContext } from "react";
import { FoodsContext } from "../../context/Context";

export const AddFood = () => {
  const { createNewFood } = useContext(FoodsContext);
  const { closeModal } = useContext(FoodsContext);

  const [newFood, setNewFood] = useState({
    name: "",
    calories: "",
    image: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("form sent!");
    createNewFood(newFood);
    setNewFood({
      ...newFood,
      name: "",
      calories: "",
      image: ""
    });
    closeModal(e);
  };

  return (
    <>
      <h2 className="App-title">Add new food:</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="control">
            <input
              className="input"
              id="name"
              type="text"
              placeholder="Name"
              onChange={e => setNewFood({ ...newFood, name: e.target.value })}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="image">
            Image
          </label>
          <div className="control">
            <input
              className="input"
              id="image"
              type="text"
              placeholder="Image"
              onChange={e => setNewFood({ ...newFood, image: e.target.value })}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="calories">
            Calories
          </label>
          <div className="control">
            <input
              className="input"
              id="calories"
              type="number"
              placeholder="Calories"
              onChange={e =>
                setNewFood({ ...newFood, calories: e.target.value })
              }
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
