import React, { useState } from 'react';

function FoodForm(props) {
  const initialState = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
  };

  const [state, setstate] = useState(initialState);
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addFood(state);
    setstate(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name" className="label has-text-white">
          Name
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Food name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="calories" className="label has-text-white">
          Calories
        </label>
        <div className="control">
          <input
            className="input"
            type="number"
            name="calories"
            placeholder="Calories"
            value={state.calories}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="image" className="label has-text-white">
          Image
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="image"
            placeholder="ImageURL"
            value={state.image}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="button is-success">Add Food</button>
    </form>
  );
}

export default FoodForm;
