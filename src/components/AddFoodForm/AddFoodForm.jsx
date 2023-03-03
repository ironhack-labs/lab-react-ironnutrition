// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import React, { useState } from 'react';
import './AddFoodForm.css'

// Iteration 4
function AddFoodForm(props) {
    const { handleAddFood } = props

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameChange = (event) => setName(event.target.value)
    const handleImageChange = (event) => setImage(event.target.value)
    const handleCaloriesChange = (event) => setCalories(event.target.value)
    const handleServingsChange = (event) => setServings(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        const foodToCreate = {
            name,
            image,
            calories,
            servings
        }
        handleAddFood(foodToCreate)
        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Divider>Add Food Entry</Divider>
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <Input value={name} type="text" id="name" onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor='image'>Image</label>
                {/* render antd <Input /> type="text" here */}
                <Input value={image} type="text" id="image" onChange={handleImageChange} />
            </div>
            <div>
                <label htmlFor='calories'>Calories</label>
                {/* render antd <Input /> type="number" here */}
                <Input value={calories} type="number" id="calories" onChange={handleCaloriesChange} />
            </div>
            <div>
                <label htmlFor='servings'>Servings</label>
                {/* render antd <Input /> type="number" here */}
                <Input value={servings} type="number" id="servings" onChange={handleServingsChange} />
            </div>
            <button type="submit">Create</button>
        </form>
    );
}



export default AddFoodForm;
