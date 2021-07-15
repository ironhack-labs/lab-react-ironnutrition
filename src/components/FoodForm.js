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
    <div className="FoodForm">
      <h4>Add a food item</h4><br></br><br></br>
      <form onSubmit={handleOnSubmit} >
        <label>Name:</label>
        <input type="text" name="name" value={formState.name} onChange={handleChange} /><br></br><br></br>

        <label>Calories:</label>
        <input type="text" name="calories" value={formState.calories} onChange={handleChange} /><br></br><br></br>

        <label>Image Url:</label>
        <input type="text" name="image" value={formState.image} onChange={handleChange} /><br></br><br></br>

       <button type="submit">Add Food Item</button><br></br><br></br>
      </form>
    </div>
  );
}

export default AddFood;