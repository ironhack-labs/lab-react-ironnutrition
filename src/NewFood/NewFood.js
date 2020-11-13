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

  function handleClickS(e) {
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
    });
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Add Food</button>
      </div>
      {state.toggleForm ? (
        <div>
          <input
            onChange={handleChange}
            name="name"
            value={state.name}
            placeholder="Food Name"
          ></input>
          <br />
          <input
            onChange={handleChange}
            type="number"
            name="calories"
            value={state.calories}
            placeholder="Calories Number"
          ></input>
          <br />
          <input
            onChange={handleChange}
            name="image"
            value={state.image}
            placeholder="Image"
          ></input>
          <br />
          <button onClick={handleClickS}>Submit</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default NewFood;
