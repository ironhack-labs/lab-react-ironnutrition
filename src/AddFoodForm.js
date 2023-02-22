import { Divider, Input } from 'antd';
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

// Iteration 4
function AddFoodForm(props) {
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
      const newFood = {name,image,calories,servings}
      props.addFood(newFood)

      setName("")
      setImage('')
      setCalories(0)
      setServings(1)
    }



  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={calories} type="Number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="Number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;