import { useState } from "react"
import { Divider, Input } from 'antd';

// <---Iteration 4---->

function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameChange = event => {
        setName(event.target.value)
    }
    const handleImageChange = event => {
        setImage(event.target.value)
    }
    const handleCaloriesChange = event => {
        setCalories(event.target.value)
    }
    const handleServingChange = event => {
        setServings(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()

    const newFood = {
        name,
        image,
        calories,
        servings
    }
    props.setList([newFood, ...props.list])

    setName("")
    setImage("")
    setCalories(0)
    setServings(0) 
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingChange} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;