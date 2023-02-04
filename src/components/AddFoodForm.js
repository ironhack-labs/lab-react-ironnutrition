import React, { useState } from 'react';
import { Button, Input } from 'antd';

const AddFoodForm = (props) => {
  const { addFood } = props
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const aux = (e) => {
    e.preventDefault();
    addFood({
      name,
      image,
      calories,
      servings
    });
  }

  return (
    <form onSubmit={aux}>
      <h1>Add Food Entry</h1>
      <label className='text' >Name</label>
      <Input type='text' value={name} onChange={(e) => setName(e.target.value)}/>

      <label className='text' >Image</label>
      <Input type='text' value={image} onChange={(e) => setImage(e.target.value)}/>

      <label className='text' >Calories</label>
      <Input type='number'value={calories} onChange={(e) => setCalories(e.target.value)}/>

      <label className='text' >Servings</label>
      <Input type='number'value={servings} onChange={(e) => setServings(e.target.value)}/>

      <Button className='buton' htmlType='submit' type='primary'>Create</Button>
    </form>
  )
}
export default AddFoodForm