import React from 'react'
import { useState } from "react";
import { Input, Form, Button } from 'antd';

const defaultfoodItem = {
    name: "",
    image: "",
    calories: "",
    servings: "",
};

function AddFoodForm({ addNewFoodItem }) {

    const [foodItem, setFoodItem] = useState(defaultfoodItem);

    const handleFormInput = (event) => {
        setFoodItem((oldFoodItem) => ({...oldFoodItem, [event.target.name]: event.target.value }));
    };
    
    const handleSubmit = () => {
        addNewFoodItem({...foodItem, calories:parseFloat(foodItem.calories), servings: parseFloat(foodItem.servings) });
    }
    return (
        <div className="Form" >
            <Form>
                <label>Name: </label>
                <Input name="name" value={foodItem.name} type="text" onChange={handleFormInput} />
                <label>Image: </label>
                <Input name="image" value={foodItem.image} type="text" onChange={handleFormInput} />
                <label>Calories: </label>
                <Input name="calories" value={foodItem.calories} type="number" onChange={handleFormInput} />
                <label>Servings: </label>
                <Input name="servings" value={foodItem.servings} type="number" onChange={handleFormInput} />
                <Button type="submit" onClick={handleSubmit}>Create</Button>
            </Form>
        </div>
    )
}

export default AddFoodForm;
