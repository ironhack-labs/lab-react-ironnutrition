import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState('')
    const [servings, setServings] = useState('')



    function handleNameInput(event) {
        setName(event.target.value)
    }


    function handleImageInput(event) {
        setImage(event.target.value)
    }


    function handleCaloriesInput(event) {
        setCalories(event.target.value)
    }

    function handleServingsInput(event) {
        setServings(event.target.value)
    }


    function handleFormSubmit(event) {
        event.preventDefault()

        const newFood = {
            "name":name,
            "calories": calories,
            "image": image,
            "servings": servings
        }

        props.handleAddFood(newFood)
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={handleNameInput} />

            <label>Image</label>
            {/* render antd <Input /> type="text" here */}
            <Input value={image} type="text" onChange={handleImageInput} />

            <label>Calories</label>
            {/* render antd <Input /> type="number" here */}
            <Input value={calories} type="number" onChange={handleCaloriesInput} />

            <label>Servings</label>
            {/* render antd <Input /> type="number" here */}
            <Input value={servings} type="number" onChange={handleServingsInput} />

            <button type="submit">Create</button>
        </form>

    )
}


export default AddFoodForm;