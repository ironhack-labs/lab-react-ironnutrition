import React, { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm({onAddFood}){
    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[calories, setCalories] = useState('');
    const[servings, setServings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood ={name, image, calories: Number(calories), servings: Number(servings) };
        onAddFood(newFood);
        setName('');
        setImage('');
        setCalories('');
        setServings('');
    };

    return (
        <div>
            <h2> Add Food Entry </h2>
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label> 
                <br/>
                <label>
                Image: 
                <input name="image" type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                </label>
                <br/>
                <label>
                Calories: 
                <input name="calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)}/>
                </label>
                <br/>
                <label>
                Servings: 
                <input name="servings" type="number" value={servings} onChange={(e) => setServings(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default AddFoodForm;