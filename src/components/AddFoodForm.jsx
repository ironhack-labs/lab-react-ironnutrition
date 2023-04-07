import { Divider, Input } from 'antd';
import React,{ useState } from 'react'

function AddFoodForm({ onFoodAdded }) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState('')
    const [servings, setServings] = useState('')

    const handleOnNameChangeName = (event) => {
        const { value } = event.target
        setName(value)
    }
    const handleOnNameChangeImage = (event) => {
        const { value } = event.target
        setImage(value)
    }
    const handleOnNameChangeCalories = (event) => {
        const { value } = event.target
        setCalories(value)
    }
    const handleOnNameChangeServingServings = (event) => {
        const { value } = event.target
        setServings(value)
    }

    function handleCreate(event){
        event.preventDefault();
        onFoodAdded( {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        })
    }

    return (
      <form onSubmit={handleCreate}>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input type='text' value={name} onChange={handleOnNameChangeName} placeholder='Name'></Input>
          
        <label>Image</label>
        <Input type='text' value={image} onChange={handleOnNameChangeImage} placeholder='Image'></Input>
          
        <label>Calories</label>
        <Input type='number' value={calories} onChange={handleOnNameChangeCalories} placeholder='Calories'></Input>
        
        <label>Servings</label>
        <Input type='number' value={servings} onChange={handleOnNameChangeServingServings} placeholder='Servings'></Input>
  
        <button type="submit">Create</button>
      </form>
    );
  }

export default AddFoodForm

