import React, { useState } from 'react';
import FoodBox from './FoodBox';

function Form() {
  const [state, setState] = useState({
    name: '',
    calories: '',
    image: '',
    toggle: false,
    toggleForm: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    setState({
      ...state,
      toggle: true,
    });
  }

  function handleClickForm(event) {
    event.preventDefault();
    setState({
      ...state,
      toggleForm: !state.toggleForm,
    });
  }

  return (
    <div>
      <div className="control">
        <button className="button is-primary" onClick={handleClickForm}>
          {state.toggleForm ? "Hide" : "Add Food"}
        </button>
      </div>
      {state.toggleForm ? (
        <form>
          <div className="field">
            <label className="label" htmlFor="name">
              Enter your food:
            </label>
            <div className="control">
              <input
                className="input is-primary"
                onChange={handleChange}
                name="name"
                value={state.name}
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="calories">
              Calories:
            </label>
            <div className="control">
              <input
                className="input is-primary"
                onChange={handleChange}
                name="calories"
                value={state.calories}
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="image">
              Enter image url:
            </label>
            <div className="control">
              <input
                className="input is-primary"
                onChange={handleChange}
                name="image"
                value={state.image}
                type="url"
              ></input>
            </div>
          </div>
          <div className="control">
            <button className="button is-primary" onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <></>
      )}

      <div className="food-toggle">
        {state.toggle ? (
          <FoodBox
            name={state.name}
            calories={state.calories}
            image={state.image}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Form;
