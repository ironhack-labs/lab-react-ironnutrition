import React, { useState } from 'react';

function AddFood(props) {
    const [Name, setName] = useState('');
    const [Image, setImage] = useState('');
    const [Calories, setCalories] = useState('');
    const [Servings, setServings] = useState('');

    const handleNameInput = (e) => {
        setName(e.target.value);
    };

    const handleImageInput = (e) => {
        setImage(e.target.value);
    };

    const handleCaloriesInput = (e) => {
        setCalories(e.target.value);
    };

    const handleServingsInput = (e) => {
        setServings(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            Name,
            Image,
            Calories,
            Servings,
        };

        // Add new food to the food list
        props.addNewFood(newFood);

        // Clear the input fields
        setName('');
        setImage('');
        setCalories('');
        setServings('');
    };

    return (
        <div>
            <h4>Add Food</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input type="text" name="Name" onChange={handleNameInput} value={Name} />
                </label>
                <label>
                    Image: <input type="text" name="Image" onChange={handleImageInput} value={Image} />
                </label>
                <label>
                    Calories: <input type="text" name="Calories" onChange={handleCaloriesInput} value={Calories} />
                </label>
                <label>
                    Serving: <input type="text" name="Servings" onChange={handleServingsInput} value={Servings} />
                </label>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default AddFood;
