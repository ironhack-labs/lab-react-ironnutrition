import React, { useState, useEffect } from 'react';

function NewFood(props) {
  const [state, setState] = useState({
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
  });

  function handleChange(event) {
    const { name, value } = event.currentTarget;

    setState({ ...state, [name]: value });
  }

  function handleSubmit() {
    props.setFoods([...props.foods, state]);
    props.setFoodsBkp([...props.foods, state]);
    props.setToggleForm(false);
  }

  return (
    <form>
      <h1 className="title is-3">New Food</h1>

      <div className="field">
        <label htmlFor="newFoodName" className="label">
          Food Name
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            id="newFoodName"
            name="name"
            onChange={handleChange}
            value={state.name}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="newFoodCalories" className="label">
          Calories
        </label>
        <div className="control">
          <input
            type="number"
            className="input"
            id="newFoodCalories"
            name="calories"
            onChange={handleChange}
            value={state.calories}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="newFoodImage" className="label">
          Image
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            id="newFoodImage"
            name="image"
            onChange={handleChange}
            value={state.image}
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button onClick={handleSubmit} className="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewFood;
