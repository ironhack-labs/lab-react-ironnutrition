import { useState } from 'react';
import { Divider, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';

// Iteration 4
function AddFoodForm({addFood}) {
    const [ name, setName ] = useState("")
    const [ image, setImage ] = useState("")
    const [ calories, setCalories ] = useState(0)
    const [ servings, setServings ] = useState(1)

    const handleNameInput = (event) => setName(event.target.value)
    const handleImageInput = (e) => setImage(e.target.value)
    const handleCaloriesInput = (e) => setCalories(e.target.value)
    const handleServingsInput = (e) => setServings(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        const NewFood = { _id: uuidv4(), name, image, calories, servings }

        addFood(NewFood)

        setName("")
        setImage("")
        setCalories(0)
        setServings(1)
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;