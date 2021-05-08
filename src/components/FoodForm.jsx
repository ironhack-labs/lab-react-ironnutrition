import React, { useState } from 'react';

const FoodForm = ({addNewFood}) => {

  const initialState = {
    name: '',
    calories: '',
    image: '',
  }

  const [formState, setFormState] = useState(initialState);

  const inputChangeHandler = (event) => {
    
    let { type, value, name } = event.target;
    
    if (type === 'number') {
      value = Number(value)
    }

    setFormState({ ...formState, [name]: value })
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
   
    addNewFood(formState);

    setFormState(initialState);
    
  }

  

  return (
    <form onSubmit={formSubmissionHandler}>
      <label htmlFor="name">Food Name</label>
      <input type="text" name="name" className="input is-primary" value={formState.name} onChange={inputChangeHandler}/>

      <label htmlFor="calories">Food Calories</label>
      <input type="number" name="calories" className="input is-primary" value={formState.calories} onChange={inputChangeHandler}/>

      <label htmlFor="image">Food Image</label>
      <input type="text" name="image" className="input is-primary" value={formState.image} onChange={inputChangeHandler} />
      
      <button type="submit" className="button is-primary">Submit </button>
    </form>
  )
}

export default FoodForm;
