import React from 'react';

const FoodForm = ({ onClick}) => {
  const initialState = { name: '', calories: 0, image: '', quantity: 0 };
  const [state, setState] = React.useState(initialState);
  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { ...state };

    if (state.calories) {
      onClick(newFood);
    }
    setState(initialState);
  };

  // const handleShow = (event) => {
  //   event.preventDefault();
  //   console.log(event.target)
  //   onClick({state: event.target.value})
  // }
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
      <button className="button is-link" type="submit">
        ADD
      </button>
      {/* <button className='button is-link is-light' value='false' type='submit' onClick={handleShow}>
        Cancel
      </button> */}
    </form>
  );
};
export default FoodForm;
