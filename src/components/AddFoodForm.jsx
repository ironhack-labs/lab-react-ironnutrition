import React from 'react'
import { useState } from 'react'



function AddFoodForm(props) {

    const [foodName,setFoodName]= useState('')
    const [image,setImage]= useState('')
    const [calories,setCalories]= useState(0)
    const [servings,setServings]= useState(0)

    function handleSubmit(e){
        e.preventDefault()
        const newFood= {name:foodName,calories:calories,image:image,servings:servings}
        console.log(newFood)
        props.setFood([...props.food,newFood])
        setFoodName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }

  return (
    <div className='AddMovie'>
    <form onSubmit={handleSubmit}>
    <h1>Add Food Entry</h1>
        <label>Name:<input name='name' type='text' onChange={(e)=>{setFoodName(e.target.value)}} value={foodName}/> </label>   
        <label>Image:<input name='image' type='text' onChange={(e)=>{setImage(e.target.value)}} value={image}/> </label> 
        <label>Calories:<input name='calories' type='number' onChange={(e)=>{setCalories(e.target.value)}} value={calories}/></label> 
        <label>Serving:<input name= 'servings' type='number' onChange={(e)=>{setServings(e.target.value)}} value={servings}/></label>
    <button>Create</button>
    </form>
    </div>
  )
}

export default AddFoodForm
