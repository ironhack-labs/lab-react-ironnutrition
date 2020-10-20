import React from 'react';

function AddFood(props) {
  if (props.addFoodState) {
    return (
      <div className="column content">
        <h2 className="subtitle">Add food</h2>
        <form className="form" onSubmit={props.addFood}>
          <label>
            <h4>Name:</h4>
            <input
              type="text"
              className="input search-bar"
              name="name"
              placeholder="e.g. Damburga"
              autoComplete="off"
            />
          </label>
          <label>
            <h4>Calories:</h4>
            <input
              type="number"
              className="input search-bar"
              name="calories"
              placeholder="e.g. 9001"
              autoComplete="off"
            />
          </label>
          <label>
            <h4>Image:</h4>
            <input
              type="text"
              className="input search-bar"
              name="image"
              placeholder="e.g. http://arizonapetvet.com/blog/wp-content/uploads/2016/09/Happy-cat-1024x711.jpg"
              autoComplete="off"
            />
          </label>
          <button className="button is-info" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <button className="button is-info" onClick={props.addFoodButton}>
        Add Food
      </button>
    </div>
  );
}

export default AddFood;
