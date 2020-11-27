import React, { useState } from 'react';
import classes from './FoodForm.module.css';

const FoodForm = (props) => {
  const initialState = {
    name: '',
    calories: 0,
    image: '',
  };
  const [form, setForm] = useState(initialState);

  return (
    <form className={classes.container}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          ></input>
        </div>
      </div>
      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input
            className="input"
            type="number"
            value={form.calories}
            onChange={(e) => setForm({ ...form, calories: e.target.value })}
          ></input>
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={form.img}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          ></input>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="input" onClick={() => props.handleAddFood(form)}>
            Add Food
          </button>
        </div>
      </div>
    </form>
  );
};

export default FoodForm;
