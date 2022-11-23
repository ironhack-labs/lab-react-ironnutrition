import React, { useState } from 'react';
import { Input, Button, Space, InputNumber } from 'antd';
import './AddFoodForm.css'

const AddFoodForm = (props) => {
  const { addFood } = props

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState("")
  const [servings, setServings] = useState("")

  const handleNameInput = e => setName(e.target.value)
  const handleImageInput = e => setImage(e.target.value)
  const handleCaloriesInput = e => setCalories(e.target.value)
  const handleServingsInput = e => setServings(e.target.value)
  
  const handleSubmit = e => {
    e.preventDefault()

    let newFood = {name, calories, image, servings}
    addFood(newFood)

    setName("")
    setImage("")
    setCalories("")
    setServings("")
  }

  return ( 
    <div className="AddFood">
      <form onSubmit={handleSubmit} style={{textAlign: 'left'}}>
        <label className='label' style={{margin: 10}}>Name</label>
        <Input style={{marginTop: 3, marginBottom: 3}}
          type='text'
          name='food'
          value={name}
          onChange={handleNameInput}
        />

        <label className='label' style={{margin: 10}}>Image</label>
        <Input style={{marginTop: 3, marginBottom: 3}}
          type='text'
          name='image'
          value={image}
          onChange={handleImageInput}
        />

        <label className='label' style={{margin: 10}}>Calories</label>
        <Input style={{marginTop: 3, marginBottom: 3}}
          type='text'
          name='calories'
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label className='label' style={{margin: 10}}>Servings</label>
        <Input style={{marginTop: 3, marginBottom: 3}}
          type='text'
          name='servings'
          value={servings}
          onChange={handleServingsInput}
        />
        <button type='submit' style={{marginTop: 3}}>Create</button>
      </form>
    </div>
   );
}
 
export default AddFoodForm;