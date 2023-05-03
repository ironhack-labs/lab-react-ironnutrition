import { Divider, Input } from 'antd';
import { useState } from 'react'


// Iteration 4
function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState()
    const [servings, setServings] = useState()

    const handleNameInput = (e) => setName(e.target.value)

    const handleImageInput = (e) => setImage(e.target.value)

    const handleCaloriesInput = (e) => setCalories(e.target.value)

    const handleServingsInput = (e) => setServings(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFood = { name, image, calories, servings }
    
        props.addFood(newFood)

        setName("")
        setImage("")
        setCalories()
        setServings()
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" value={name} name="name" onChange={handleNameInput} />

      <label>Image</label>
      <Input type="text" value={image} name="image" onChange={handleImageInput} />

      <label>Calories</label>
      <Input type="number" value={calories} name="calories" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input type="number" value={servings} name="servings" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;







