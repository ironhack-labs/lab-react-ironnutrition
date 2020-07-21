import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const AddFoodForm = (props) => {
  const { stateFoods, setStateFoods } = props;
  const [localFood, setLocalFood] = useState({
    name: '',
    calories: '',
    image: '',
  });
  const handleChange = (e) => {
    setLocalFood({ ...localFood, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStateFoods({
      ...stateFoods,
      foodList: [...stateFoods.foodList, localFood],
    });
    props.history.push('/');
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
            value={localFood.name}
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
      <div className="field">
        <button type="submit" className="button is-success">
          Add new food
        </button>
      </div>
    </form>
  );
};

export default withRouter(AddFoodForm);
