import { useState } from 'react'
import { Divider, Input } from 'antd';

function AddFoodForm({AddFood}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState(1)
  const [servings, setServings] = useState(1)

  const handleSubmit = e => {
    e.preventDefault()

    const name = e.target.name.value
    const image = e.target.image.value
    const calories = e.target.calories.value
    const servings = e.target.servings.value

    AddFood({
      name: name,
      image: image,
      calories: calories,
      servings: servings
    })
    
    setName("")
    setImage("")
    setCalories(1)
    setServings(1)
  }

  const handleNameInput = e => setName(e.target.value)
  const handleImageInput = e => setImage(e.target.value)
  const handleCaloriesInput = e => setCalories(e.target.value)
  const handleServingsInput = e => setServings(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input name="name" type="text" 
        value={name} onChange={handleNameInput} 
      />

      <label>Image</label>
      <Input name="image" type="text" 
        value={image} onChange={handleImageInput}
      />

      <label>Calories</label>
      <Input name="calories" type="number"
        value={calories} onChange={handleCaloriesInput} 
      />

      <label>Servings</label>
      <Input name="servings" type="number"
        value={servings} onChange={handleServingsInput} 
      />

      <button type="submit">Create</button>
    </form>
  )
}

export default AddFoodForm