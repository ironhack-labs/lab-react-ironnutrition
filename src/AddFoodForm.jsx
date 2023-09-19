import React, { useState } from 'react'
import { Input } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState('')
  const [servings, setServings] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    const newFood = {name, image, calories, servings}
    props.addNewFood(newFood)
    setName('')
    setImage('')
    setCalories('')
    setServings('')
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <Input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" />
            <label>Image</label>
            <Input value={image} onChange={(e)=>{setImage(e.target.value)}} type="text" />
            <label>Calories</label>
            <Input value={calories} onChange={(e)=>{setCalories(e.target.value)}} type='number' />
            <label>Servings</label>
            <Input value={servings} onChange={(e)=>{setServings(e.target.value)}} type="number" />

            <button type='submit'>Submit</button>
        </form>
        
        </div>
  )
}

export default AddFoodForm