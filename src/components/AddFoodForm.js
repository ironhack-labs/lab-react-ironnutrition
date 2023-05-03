import { Divider, Input } from 'antd';
import { useState } from "react"

function AddFoodForm({ addFood }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(1)

    const handleNameChange = (e) => setName(e.target.value)
    const handleImageChange = (e) => setImage(e.target.value)
    const handleCaloriesChange = (e) => setCalories(e.target.value)
    const handleServingsChange = (e) => setServings(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const newFood = { name, image, calories, servings }

        addFood(newFood)

        setName("")
        setImage("")
        setCalories(0)
        setServings(1)
    }

  return (
    <form  onSubmit={handleSubmit}class="addForm">
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} name="name" type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} name="image" type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} name="calories" type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} name="servings" type="number" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
  )
}

export default AddFoodForm;