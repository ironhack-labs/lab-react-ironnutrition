import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleNameInput = e => setName(e.target.value);
    const handleImgInput = e => setImage(e.target.value);
    const handleCalInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {

        e.preventDefault();
        const newFood = { name, image, calories, servings };
        console.log("Submitted: ", newFood);
       
        props.addFood(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
        <form 
            onSubmit={handleSubmit}
            style={{ width: 400, height: 400, margin: 5 }}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={handleNameInput} />

            <label>Image</label>
            <Input value={image} type="text" onChange={handleImgInput} />

            <label>Calories</label>
            <Input value={calories} type="number" onChange={handleCalInput} />

            <label>Servings</label>
            <Input value={servings} type="number" onChange={handleServingsInput} />

            <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;
