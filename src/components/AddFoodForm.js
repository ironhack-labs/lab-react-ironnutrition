import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm({ callbackToCreate }) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
    //...

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        callbackToCreate(newFood);

        //clear form
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input
                value={name}
                type="text"
                placeholder="enter the title"
                onChange={(e) => { setName(e.target.value) }}
            />

            <label>Image</label>
            {/* render antd <Input /> type="text" here */}
            <Input 
                value={image}
                type="text" 
                placeholder="enter the image url"
                onChange={(e) => { setImage(e.target.value) }}
        
            />

            <label>Calories</label>
            {/* render antd <Input /> type="number" here */}
            <Input
                value={calories}
                type="number" 
                placeholder="enter the calories"
                onChange={(e) => { setCalories(e.target.value) }}
            />

            <label>Servings</label>
            {/* render antd <Input /> type="number" here */}
            <Input
                value={servings}
                type="number" 
                placeholder="enter the servings"
                onChange={(e) => { setServings(e.target.value) }}
            />

            <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;
