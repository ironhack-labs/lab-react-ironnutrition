import { useState } from 'react';

const DEFAULT_FOOD_STATE = { name: '', img: '', calories: 0, servings: 0 };

const FoodForm = ({ onSubmit }) => {
  const [food, setFood] = useState(DEFAULT_FOOD_STATE);

  const handleOnChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setFood((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(food);
    setFood(DEFAULT_FOOD_STATE);
  };

  return (
    <form className="mt-4">
      <h5 className="text-secondary">Food Form</h5>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input value={food.name} className="form-control" onChange={handleOnChange} type="text" name="name" id="name" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Image</label>
        <input value={food.img} onChange={handleOnChange} className="form-control" type="text" name="img" id="img" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Calories</label>
        <input value={food.calories} onChange={handleOnChange} className="form-control" type="number" name="calories" id="calories" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Servings</label>
        <input value={food.servings} onChange={handleOnChange} className="form-control" type="number" name="servings" id="servings" />
      </div>

      <button onClick={handleOnSubmit} className="btn btn-primary" type="submit">Create</button>
    </form>
  );
};

export default FoodForm;
