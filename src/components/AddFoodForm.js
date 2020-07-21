import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

const AddFoodForm = (props) => {
  const { stateFoods, setStateFoods } = props;
  const initialState = {
    name: '',
    calories: '',
    image: '',
  };
  const [newFood, setNewFood] = useState(initialState);
  const handleChange = (e) => {
    setNewFood({ ...newFood, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newFood.name || !newFood.calories || !newFood.image) {
      alert('Yaw! Please fill the form');
    } else {
      setStateFoods({
        ...stateFoods,
        foodList: [...stateFoods.foodList, newFood],
      });
      setNewFood(initialState);
      props.history.push('/');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Food name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Enter food name"
            onChange={handleChange}
            value={newFood.name}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Number of calories</label>
        <div className="control">
          <input
            className="input"
            type="number"
            name="calories"
            placeholder="Enter number of calories"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            type="url"
            name="image"
            placeholder="Enter the link a picture describing the food"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field flex">
        <Link to="/">Go back</Link>
        <button type="submit" className="button is-success">
          Add new food
        </button>
      </div>
    </form>
  );
};

export default withRouter(AddFoodForm);
