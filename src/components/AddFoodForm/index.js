import React, { useState } from 'react'
import { Button, Input } from 'antd';

const AddFoodForm = (props) => {
  const { addFoodFn } = props
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSumbit = (e) => {
    e.preventDefault();
    addFoodFn({
      name,
      image,
      calories,
      servings
    });
  }

  return (
    <form onSubmit={handleSumbit}>
      <h1>Add Food Entry</h1>
      <label>Name</label>
      <Input type='text' value={name} onChange={(e) => setName(e.target.value)}/>

      <label>Image</label>
      <Input type='text' value={image} onChange={(e) => setImage(e.target.value)}/>

      <label>Calories</label>
      <Input type='number'value={calories} onChange={(e) => setCalories(e.target.value)}/>

      <label>Servings</label>
      <Input type='number'value={servings} onChange={(e) => setServings(e.target.value)}/>

      <Button htmlType='submit' type='primary'>Create</Button>
    </form>
  )
}

export default AddFoodForm