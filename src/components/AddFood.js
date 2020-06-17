import React from 'react';

export default function AddFood(props) {
  return (
    <>
      <form onSubmit={props.onAdd}>
        <label className="label">Name</label>
        <input className="input" name="name" type="text" placeholder="e.g blueberries" />

        <label className="label">Number of Calories</label>
        <input className="input" name="calories" type="number" placeholder="120 cal" />

        <label className="label">Image</label>
        <input
          className="input"
          type="string" name="image" 
          placeholder="image.com/asdfdad/adsfadsf"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
