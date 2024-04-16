import React from 'react'
import './AddFoodForm.css'
import { useState } from 'react';

function AddFoodForm(props) {
const {onCreate} = props

const [state, setState] = useState({name: '', image:'', calories:'', servings:''});

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state)
    onCreate(state)
}

const handleChange = (event) => {
    const{name, value} = event.currentTarget
    setState({...state, 
    [name]: value
    })

}

  return (
    <form className='food-form' onSubmit={handleSubmit}>
        <input onChange={handleChange} name="name" type="text" placeholder='Name' value={state.name}/>
        <input onChange={handleChange} name="image" type="text" placeholder='Image URL' value={state.image}/>
        <input onChange={handleChange} name="calories" type="text" placeholder='Calories' value={state.calories}/>
        <input onChange={handleChange} name="servings" type="text" placeholder='Servings' value={state.servings}/>
        <button>Create food</button>
    </form>
  )
}

export default AddFoodForm