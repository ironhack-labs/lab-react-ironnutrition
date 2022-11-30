import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {
    const [name, setName]= useState("")
    const [image, setImage]= useState("")
    const [calories, setCalories]= useState(0)
    const [servings, setServings]= useState(0)
  
    const handleNameChange = event => {
      console.log(event.target.value)
  
       setName(event.target.value)
  }
  
    const handleImageChange = event => {
      console.log(event.target.value)
  
      setImage(event.target.value)
    }
  
    const handleCaloriesChange = event => {
      console.log(event.target.value)
  
      setCalories(event.target.value)
    }
  
    const handleServingsChange = event => {
      console.log(event.target.value)
  
      setServings(event.target.value)
    }
  
  
    const handleSubmit = event => {
        console.log(event)
      event.preventDefault()
      const newFood = {
        name,
        image,
        calories,
        servings,
      }
      props.setFoodList([newFood, ...props.foodList])
      setName("")
      setImage("")
      setCalories(0)
      setServings(0)
    }
  



  return (
    <form onSubmit={handleSubmit} className="form">
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsChange} />

      <button type="submit">Create</button>

    </form>
  );
  }

export default AddFoodForm;