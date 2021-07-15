import React, { useState } from "react";

function AddFood(props) {
  
  const initialState =   {
    name: '',
    calories: "",
    image: ""
  }

  const [formState, setFormState] = useState( initialState )


  function handleChange(event){
    setFormState( { ...formState, [event.target.name]: event.target.value } )
  }

  function handleOnSubmit(event){
    event.preventDefault();
    props.addFoodHandler(formState)
    props.toggleEditMode()
    setFormState( initialState )
  }

  return (
    <div className="field">
      <h4>Add a food item</h4><br></br><br></br>
      <form onSubmit={handleOnSubmit} >
        <label className="label" >Name:</label>
        <input className="input" type="text" name="name" value={formState.name} onChange={handleChange} /><br></br><br></br>

        <label className="label" >Calories:</label>
        <input className="input" type="text" name="calories" value={formState.calories} onChange={handleChange} /><br></br><br></br>

        <label className="label" >Image Url:</label>
        <input className="input" type="text" name="image" value={formState.image} onChange={handleChange} /><br></br><br></br>

       <button  className="button is-info" type="submit">Add Food Item</button><br></br><br></br>
      </form>
    </div>
  );
}

export default AddFood;