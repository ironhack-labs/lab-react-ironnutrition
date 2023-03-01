import React, {useState} from 'react'
import { Divider, Input } from 'antd';

function AddFoodForm({ addFood }) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(1)

    const handleName = (e) => setName(e.target.value)
    const handleImage = (e) => setImage(e.target.value)
    const handleCalories = (e) => setCalories(e.target.value)
    const handleServings = (e) => setServings(e.target.value)

    const handleSubmit = (e) => {

        e.preventDefault()

        const newRecipe = {name, image, calories, servings}

        addFood(newRecipe)

        setName("")
        setImage("")
        setCalories(0)
        setServings(1)
    }


  return (
        <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor='name'>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label htmlFor='image'>Image</label>
      <Input value={image} type="text" onChange={handleImage}/>

      <label htmlFor='calories'>Calories</label>
      <Input type="number" onChange={handleCalories}/>

      <label htmlFor='servings'>Servings</label>
      <Input type="number" onChange={handleServings}/>

      <button type="submit">Create</button>
    </form>
  )
}

export default AddFoodForm