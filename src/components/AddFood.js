import React from 'react';

export default function FoodBox(props) {
  return (
    <form className="form" onSubmit={props.addItem}>
      <input
        type="text"
        name="name"
        placeholder="e.g Cheese"
        autoComplete="off"
      ></input>
      <input type="number" name="calories" autoComplete="off"></input>
      <input
        type="text"
        name="image"
        placeholder="Image url"
        autoComplete="off"
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}
