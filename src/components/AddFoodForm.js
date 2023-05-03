// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServing] = useState(0)
    const handleNameInput = (e) => setName(e.target.value)
    const handleImageInput = (e) => setImage(e.target.value)
    const handleCaloriesInput = (e) => setCalories(e.target.value)
    const handleServingsInput = (e) => setServing(e.target.checked)
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFoodForm = { name, image, calories, servings }
        props.addFood(newFoodForm)

    // Reset the state
    setName("")
    setImage("")
    setCalories(0)
    setServing(0)
  }
  return (
    <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleNameInput} />

        <label htmlFor="image"></label>
        <input type="text" name="image" value={image} onChange={handleImageInput} />

        <label htmlFor="calories">Calories:</label>
        <input type="number" name="calories" value={calories} onChange={handleCaloriesInput} />

        <label htmlFor="servings">Servings:</label>
        <input type="number" name="servings" checked={servings} onChange={handleServingsInput} />
            
        <button type="submit">Add a Food</button>
    </form>
  );
}

export default AddFoodForm;
