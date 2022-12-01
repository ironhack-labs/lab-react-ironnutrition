import React, {useState} from 'react'
import {Input, Button} from 'antd';

const AddFoodForm = (props) => {
const {addFoodFn} = props;
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [calories, setCalories] = useState("");
const [servings, setServings] = useState("");

const handleSubmit = (event) => {
    event.preventDefault()
    console.log("enviar datos")
    addFoodFn({name, image, calories, servings});
}
  return (
    <form onSubmit={handleSubmit}>
        <h1>Add Food</h1>

        <label>Name</label>
        <Input type='text' value={name} onChange={(event) => setName(event.target.value)}/>

        <label>Image</label>
        <Input type="text" value={image} onChange={(event) => setImage(event.target.value)}/>

        <label>Calories</label>
        <Input type='number' value={calories} onChange={(event) => setCalories(event.target.value)}/>

        <label>Servings</label>
        <Input type='number' value={servings} onChange={(event) => setServings(event.target.value)}/>

        <Button htmlType="submit">Create</Button>
    </form>
    
  )
}

export default AddFoodForm;