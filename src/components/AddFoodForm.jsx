import React, { useState } from 'react';

const initialState = {
  name: '',
  calories: 0,
  image: '',
};

const AddFoodForm = ({addedFood}) => {

  const [formState, setFormState] = useState(initialState);

  const inputHandler = (event) => {

    let {name, value, type} = event.target;

    if (type === "number"){
      value = Number(value);
    } 

    setFormState({ ...formState, [name]: value });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    addedFood(formState); 
    setFormState(initialState);   
  }

  return(
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Food name</label>
      <input className="input is-link" type="text" name="name" value={formState.name} onChange={inputHandler}/>

      <label htmlFor="calories">Calories</label>
      <input className="input is-link" type="number" name="calories" value={formState.calories} onChange={inputHandler}/>

      <label htmlFor="image">Food image</label>
      <input className="input is-link" type="text" name="image" value={formState.image} onChange={inputHandler}/>

      <button className="button is-link">Save</button>
    </form>
  )
}

export default AddFoodForm;