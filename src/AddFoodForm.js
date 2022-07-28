import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState("")
  const [servings, setServings] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFood = {
      name,
      image,
      calories,
      servings
    }
    props.callbackAdd((prevArr) => {
      return [newFood, ...prevArr]
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} name="name" type="text" onChange={(e) => {setName(e.target.value)}} />

      <label>Image</label>
      <Input value={image} name="image" type="text" onChange={(e) => {setImage(e.target.value)}} />

      <label>Calories</label>
      <Input value={calories} name="calories" type="number" onChange={(e) => {setCalories(e.target.value)}} />

      <label>Servings</label>
      <Input value={servings} name="servings" type="number" onChange={(e) => {setServings(e.target.value)}} />

      <button type="submit" >Create</button>
    </form>
  );
}

export default AddFoodForm;
