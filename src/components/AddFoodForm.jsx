// Your code here

import React, { useState } from 'react';

function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            id: Math.random().toString(), 
            name,
            calories,
            image,
            servings,
        };
        props.addNewFood(newFood); 
     
        setName("");
        setCalories("");
        setImage("");
        setServings("");
    };

    return (
        <form onSubmit={handleSubmit}>
           <label>Name<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /></label>
            <label>Image<input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" /></label>
            <label>Calories<input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Calories" /></label>
            <label>Servings<input type="number" value={servings} onChange={(e) => setServings(e.target.value)} placeholder="Servings" /></label>
            <button type="submit">Add Food</button>
        </form>
    );
}

export default AddFoodForm;