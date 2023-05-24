import React, { useState } from 'react';
import { Input, Button } from 'antd';

const AddFoodForm = ({ onAddFood }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {
            name,
            image,
            calories: parseInt(calories),
            servings: parseInt(servings),
        };
        onAddFood(newFood);

        setName('');
        setImage('');
        setCalories('');
        setServings('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <Input
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                type="number"
            />
            <Input
                placeholder="Servings"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                type="number"
            />
            <Button type="primary" htmlType="submit">
                Add Food
            </Button>
        </form>
    );
};

export default AddFoodForm;