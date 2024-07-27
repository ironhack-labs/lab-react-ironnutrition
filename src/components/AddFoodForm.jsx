import React, { useState } from 'react'

function AddFoodForm(props) {

const [name, setName] = useState("")
const [image, setImage] = useState("")
const [calories, setCalories] = useState("")
const [servings, setServings] = useState("")

function handleSubmit(e){
    e.preventDefault()
    let newFood ={
        name: name,
        image: image,
        calories: calories,
        servings: servings,
        id: Date.now()
    }    
    props.setFoods([...props.food,newFood])

    setName ("")
    setCalories("")
    setImage("")
    setServings("")
}
  return (
    <div className='App'>
    <form onSubmit={handleSubmit} className='form-container'>
    <label>
        Name
        <input value ={name} type="text" onChange={(e)=>setName(e.target.value)}/>
    </label>
    <label>
        Calories
        <input value ={calories} type="text" onChange={(e)=>setCalories(e.target.value)}/>
    </label>
    <label>
        Image
        <input value ={image} type="url" onChange={(e)=>setImage(e.target.value)}/>
    </label>
    <label>
        Servings
        <input value ={servings} type="text" onChange={(e)=>setServings(e.target.value)}/>
    </label>

    <button type='submit' className='form-button'>Create</button>
    </form>
    </div>
  )
}

export default AddFoodForm