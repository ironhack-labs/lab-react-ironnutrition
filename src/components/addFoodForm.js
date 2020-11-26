import React, { useState } from "react";
import '../App.css';

const initialState = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0,
  };

const AddFoodForm = (props) => {
    
    const [formState, setFormState] = useState(initialState);

    const handleInputChange = (event) => {
      let inputValue = event.target.value;
      let inputName = event.target.name;
      let inputType = event.target.type;

      if(inputType === "number") {
        inputValue = parseInt(inputValue)
      };

      setFormState({ ...formState, [inputName]: inputValue});

    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      props.handleLiftFoodFromState(formState);
      setFormState(initialState);
    };

      return (
        <div>
          <form onSubmit={handleFormSubmit} >
            <div class="field">
                <label class="label">Name:</label>
                <div class="control">
                <input class="input"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
            />
                </div>
            </div>

            <div class="field">
                <label class="label">Calories:</label>
                <div class="control">
                <input class="input"
                    type="number"
                    name="calories"
                    value={formState.calories}
                    onChange={handleInputChange}
                    />
                </div>
            </div>

            <div class="field">
                <label class="label">Image URL:</label>
                <div class="control">
                <input class="input"
                    type="text"
                    name="image"
                    checked={formState.image}
                    onChange={handleInputChange}
                    />
                </div>
            </div>

            <div class="field">
            <label class="label">Quantity:</label>
                <div class="control">
                <input class="input"
                    type="number"
                    name="quantity"
                    value={formState.quantity}
                    onChange={handleInputChange}
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

