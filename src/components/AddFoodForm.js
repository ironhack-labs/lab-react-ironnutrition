import {Divider,Input} from 'antd'
import {useState} from 'react'

const AddFoodForm = (props) => {
    const [addFoodName,setAddFoodName] = useState('')
    const [addFoodImage,setAddFoodImage] = useState('')
    const [addFoodCalories,setAddFoodCalories] = useState('')
    const [addFoodServings,setAddFoodServings] = useState('')
    const updateFoodName = (event) => setAddFoodName(event.target.value)
    const updateFoodImage = (event) => setAddFoodImage(event.target.value)
    const updateFoodCalories = (event) => setAddFoodCalories(event.target.value)
    const updateFoodServings = (event) => setAddFoodServings(event.target.value)
    const handleFormSubmit = (event) => { 
        event.preventDefault()
        const newFoodObject = {
            name: addFoodName,
            image: addFoodImage,
            calories: addFoodCalories,
            servings: addFoodServings
    }
    props.addNewFood(newFoodObject)
}
    return (
        <form onSubmit={handleFormSubmit}>
            <Divider>Add Food Entry</Divider>
            <label>Name</label>
            <Input value={addFoodName} type='text' onChange={updateFoodName}/>
            <label>Image</label>
            <Input value={addFoodImage} type='text' onChange={updateFoodImage}/>
            <label>Calories</label>
            <Input value={addFoodCalories} type='number' onChange={updateFoodCalories}/>
            <label>Servings</label>
            <Input value={addFoodServings} type='number' onChange={updateFoodServings}/>
            <button type='submit'>Create</button>
        </form>
    )
}

export default AddFoodForm