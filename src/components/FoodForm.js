import { useState } from "react";
import React from 'react';

function FoodForm (props) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name,
            calories,
            image
        }

        props.createFood(newFood);

        setName("");
        setCalories("");
    }

    return (
        <div className="foodForm">
         <form onSubmit={handleSubmit}>
            <label>Name:<input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} /></label>
           <label>Calories: <input type="number" name="year"  placeholder="350" value={calories} onChange={(e) => { setCalories(e.target.value) }} /></label>
            <label>Image:<input type="url" name="image" value={image} alt="image" onChange={(e) => { setImage(e.target.value) }} /></label>
            <button className="button-hide" type="submit">Submit</button>
        </form>
    </div>

    )
}

export default FoodForm; 