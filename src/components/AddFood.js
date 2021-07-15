import React, { useState } from "react"


export default function AddFood(props){

    const{addFoodHandler} = props

    const initialState ={} //estado vacio inicial

    const [formState, setFormState] = useState( initialState ) 

    function handleChange(event){
        setFormState({ ...formState, [event.target.name]: event.target.value})
    }

    function handleOnSubmit(event){
        event.preventDefault();

        
        addFoodHandler(formState)
        setFormState( initialState )
      }


    return(
    <div className="AddFood">      
      <form onSubmit={handleOnSubmit} >
        <label>Name:</label>
        <input type="text" name="name" value={formState.name} onChange={handleChange} />

        <label>Calories:</label>
        <input type="text" name="calories" value={formState.calories} onChange={handleChange} />

        <label>Image:</label>
        <input type="url" name="image" value={formState.image} onChange={handleChange} />
        
        <button type="submit">Add a Food</button>
      </form>
    </div>
    )
}