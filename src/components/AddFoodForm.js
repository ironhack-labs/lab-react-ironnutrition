import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);


    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleImageChange = event => {
        setImage(event.target.value);
    }

    const handleCalorieChange = event => {
        setCalories(event.target.value)
    }

    const handleServingChange = event => {
        setServings(event.target.value);
    }

    const handleAddNewFood = event => {
        event.preventDefault();

        const newFood = {
            name,
            image,
            calories,
            servings
        }

        props.setMeals([newFood, ...props.meals])

        //Reset input fields
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }
    return (

        <form onSubmit={handleAddNewFood}>
            <Divider>Add Food Entry</Divider>

            <label htmlFor="name">Name:</label>
            <Input value={name} type="text" onChange={handleNameChange} required />

            <label htmlFor="image">Image</label>
            {/* render antd <Input /> type="text" here */}
            <Input value={image} type="text" onChange={handleImageChange}/>

            <label htmlFor="calories">Calories</label>
            {/* render antd <Input /> type="number" here */}
            <Input value={calories} type="number" onChange={handleCalorieChange}/>
            <label htmlFor="servings">Servings</label>
            {/* render antd <Input /> type="number" here */}
            <Input value={servings} type="number" onChange={handleServingChange}/>

            <button type="submit">Create</button>
        </form>

    );
}

export default AddFoodForm;