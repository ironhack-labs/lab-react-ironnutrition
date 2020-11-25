import React, { useState } from "react";
import '../App.css';

const initialState = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0,
  };

const AddFoodForm = (props) => {
    const [allValues, setAllValues] = useState(initialState);

    const inputChangeHandler = (event) => {
        let { name, value, type, } = event.target;
        setAllValues({ ...allValues, [name]: value });
      };

    const handleFormSubmission = (event) => {
        event.preventDefault();
        props.addFood(allValues);
        setAllValues(initialState);
      };

      return (
        <div>
          <form onSubmit={handleFormSubmission} >
            <div class="field">
                <label class="label">Name:</label>
                <div class="control">
                <input class="input"
                    type="text"
                    name="name"
                    value={allValues.name}
                    onChange={inputChangeHandler}
            />
                </div>
            </div>

            <div class="field">
                <label class="label">Calories:</label>
                <div class="control">
                <input class="input"
                    type="number"
                    name="calories"
                    value={allValues.calories}
                    onChange={inputChangeHandler}
                    />
                </div>
            </div>

            <div class="field">
                <label class="label">Image URL:</label>
                <div class="control">
                <input class="input"
                    type="text"
                    name="image"
                    checked={allValues.image}
                    onChange={inputChangeHandler}
                    />
                </div>
            </div>

            <div class="field">
            <label class="label">Quantity:</label>
                <div class="control">
                <input class="input"
                    type="number"
                    name="quantity"
                    value={allValues.quantity}
                    onChange={inputChangeHandler}
                    />
                </div>
            </div>
    
            <button class="button is-link">Submit</button>
            <hr/>
          </form>
        </div>
      );

}

export default AddFoodForm;

