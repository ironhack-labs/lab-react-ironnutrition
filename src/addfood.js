import React, { useState } from 'react';

const initialState = {
  name: '',
  calories: 0,
  image: '',
  quantity: 0,
};

export default function AddFoodForm(props) {
  const [allValues, setAllValues] = useState(initialState);

  const inputChangeHandler = (event) => {
    let { name, value } = event.target;
    setAllValues({ ...allValues, [name]: value });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.addFood(allValues);
    props.formToggler();
    setAllValues(initialState);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div class="field">
        <label class="label">Name of Food</label>
        <div class="control">
          <input
            class="input"
            type="text"
            name="name"
            value={allValues.name}
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Amount of calories</label>
        <div class="control">
          <input
            class="input"
            type="number"
            name="calories"
            value={allValues.calories}
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Url to a picture</label>
        <div class="control">
          <input
            class="input"
            type="text"
            name="image"
            value={allValues.image}
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Quantity</label>
        <div class="control">
          <input
            class="input"
            type="number"
            name="quantity"
            value={allValues.quantity}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div class="control">
        <button class="button is-primary">Submit</button>
      </div>
    </form>
  );
}
