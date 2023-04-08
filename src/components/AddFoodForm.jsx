import { useState } from 'react';
import React from 'react';
import { Divider, Input } from 'antd';

const empty = {
  name: '',
  image: '',
  calories: '',
  servings: '',
};

function AddFoodForm({ addFood }) {
  const [food, setFood] = useState(empty);

  const handleChange = (ev) => {
    const key = ev.target.id;
    const value = ev.target.value;

    setFood({
      ...food,
      [key]: value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('hola');
    addFood(food);
    setFood(empty);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Foods Entry</Divider>

      <div className="ms-5 w-25 d-flex flex-column justify-content-center">
        <label className="form-label">Name</label>
        <Input
          className="form-control"
          value={food.name}
          type="text"
          onChange={handleChange}
          id="name"
        />
        <label className="form-label">Image</label>
        <Input
          className="form-control"
          value={food.image}
          type="text"
          onChange={handleChange}
          id="image"
        />
        <label className="form-label">Calories</label>
        <Input
          className="form-control"
          value={food.calories}
          type="number"
          onChange={handleChange}
          id="calories"
        />
        <label className="form-label">Servings</label>
        <Input
          className="form-control"
          value={food.servings}
          type="number"
          onChange={handleChange}
          id="servings"
        />
        <button className="btn btn-success mt-3 mb-5 w-25" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default AddFoodForm;
