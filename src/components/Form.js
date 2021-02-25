import React, { useState } from 'react';

export default function Form(props) {
  let [newFood, setNewFood] = useState({});
  const error = null;
  const handleChange = (event) => {
    event.preventDefault();
    setNewFood({ ...newFood, [event.target.name]: event.target.value });
  };
  const addFood = (event) => {
    event.preventDefault();
    props.setAddFood([...props.addFood, newFood]);
    props.changeActive(false);
    props.addSearch([...props.addFood, newFood]);
  };
  return (
    <div>
      <div>
        <h2>Formulario de comida</h2>
        <form onSubmit={(e) => addFood(e)}>
          <h3>Nombre</h3>
          <input
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
            value={props.name}
          />
          <h3>Calories</h3>
          <input
            name="calories"
            onChange={(e) => {
              handleChange(e);
            }}
            value={props.calories}
          />
          <h3>Image</h3>
          <input
            name="image"
            onChange={(e) => {
              handleChange(e);
            }}
            value={props.image}
          />
          <button>Add Food</button>
        </form>
        {error === null ? null : error}
      </div>
    </div>
  );
}
