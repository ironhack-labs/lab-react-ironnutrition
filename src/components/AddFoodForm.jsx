// Your code here
import React, { useState } from 'react'
import { Divider, Input, Button } from "antd";



const AddFoodForm = ({ onSubmit }) => {
    const [name, setName,] = useState('')
    const [image, setImage,] = useState('')
    const [calories, setCalories,] = useState(0)
    const [servings, setServings,] = useState(0)
    let id = 1
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = { id, name, image, calories, servings }
        id += 1
        onSubmit(prev => [...prev, formData])

    }
    return (
        <div>
            <form className='conteiner' onSubmit={handleSubmit}>
                <Divider>Add Food Entry</Divider>
                <label>
                    name:
                </label>
                <Input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" />
                <label>
                    image:
                </label>
                <Input value={image} onChange={(e) => { setImage(e.target.value) }} type="text" name="image" />
                <label>
                    Calories:
                </label>
                <Input value={calories} onChange={(e) => { setCalories(e.target.value) }} type="number" name="calories" />
                <label>
                    Servings:
                </label>
                <Input value={servings} onChange={(e) => { setServings(e.target.value) }} type="number" name="servings" />
                <button type='submit'>
                    Create
                </button>
            </form>
            
        </div>

    )
}

export default AddFoodForm

