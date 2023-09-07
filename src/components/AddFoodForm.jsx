import React, { useState } from 'react'
import { Divider, Input} from "antd";


function AddFoodForm(props) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings};
        props.addNewFood(newFood)
        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
      }

    return (
        <form onSubmit={handleSubmit} className='FoodEntry'>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={(e)=>setName(e.target.value)} />

            <label>Image</label>
            <Input value={image} type="text" onChange={(e)=>setImage(e.target.value)} />

            <label>Calories</label>
            <Input value={calories} type="number" onChange={(e)=>setCalories(parseInt(e.target.value))} />

            <label>Servings</label>
            <Input value={servings} type="number" onChange={(e)=>setServings(parseInt(e.target.value))} />

            <button type="submit">Create</button>
        </form>
    )
}

export default AddFoodForm