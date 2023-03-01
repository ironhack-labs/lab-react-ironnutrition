import React, {useState} from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({addToList}) {
    //creating the state
const [name, setName] = useState("")
const [image, setImage] = useState("")
const [calories, setCalories] = useState(0)
const [servings, setServings] = useState(0)

//handler functions
const handleName = (e) => setName(e.target.value)
const handleImage = (e) => setImage(e.target.value)
const handleCalories = (e) => setCalories(Number(e.target.value))
const handleServings = (e) => setServings(Number(e.target.value))

const handleSubmit = (e) => {
    e.preventDefault()

    const newFood = {name, image, calories, servings}
    addToList(newFood)
    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
}


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={calories} type="text" onChange={handleCalories} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={servings} type="text" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;