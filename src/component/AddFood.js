import React from 'react';

export default function AddFood(props) {
  return (
    <div>
      <form onSubmit={props.onAdd}>
        <input type="text" placeholder="name" name="name"></input>
        <input type="text" placeholder="calories" name="calories"></input>
        <input type="text" placeholder="image url" name="image"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
