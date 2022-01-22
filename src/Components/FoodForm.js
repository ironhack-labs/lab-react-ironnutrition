import React from 'react';

const FoodForm = ({ onClick }) => {
  const initialState = { name: '', calories: 0, image: '' };
  const [state, setState] = React.useState(initialState);
  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = { ...state };
    console.log(newFood)
    if (state.calories) {
      onClick(newFood);
    }
    setState(initialState);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        className="input"
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
      />

      <label className="label" htmlFor="image">
        Image URL
      </label>
      <input
        className="input"
        type="text"
        name="image"
        value={state.image}
        onChange={handleChange}
      />
      <label className="label" htmlFor="calories">
        Calories
      </label>
      <input
        className="input"
        type="number"
        name="calories"
        value={state.calories}
        onChange={handleChange}
      />
      <button className="button is-dark" type="submit">
        ADD
      </button>
    </form>
  );
};
export default FoodForm;
