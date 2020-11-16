import React, { useState } from 'react';
import foodsOriginal from '../foods.json';

function NewFood(props) {
  const [state, setState] = useState({
    toggleForm: false,
    image: '',
    name: '',
    calories: '',
  });

  function handleClick(e) {
    e.preventDefault();
    setState({
      ...state,
      toggleForm: !state.toggleForm,
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    foodsOriginal.push({
      name: state.name,
      calories: Number(state.calories),
      image: state.image,
      quantity: 0,
    });
    props.setFoods([...foodsOriginal]);
    setState({
      ...state,
      toggleForm: false,
      image: '',
      name: '',
      calories: '',
    });
  }

  return (
    <div>
      <div>
        <button className="button is-link" onClick={handleClick}>
          Add Food
        </button>
      </div>
      {state.toggleForm ? (
        <div className="is-flex-direction-column mt-3">
          <input
            className="input field is-primary"
            onChange={handleChange}
            name="name"
            value={state.name}
            placeholder="Food Name"
          ></input>
          <input
            className="input field is-warning"
            onChange={handleChange}
            type="number"
            name="calories"
            value={state.calories}
            placeholder="Calories Number"
          ></input>

          <div className=" field is-dark file has-name">
            <label className="file-label">
              <input
                className=" file-input"
                onChange={handleChange}
                type="file"
                name="image"
                value={state.image}
                placeholder="Image"
              ></input>
              <span className="file-cta">
                <span className="file-label">Choose a file…</span>
              </span>
              <span class="file-name ">{state.image}</span>
            </label>
          </div>

          <button className="button is-black" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default NewFood;
