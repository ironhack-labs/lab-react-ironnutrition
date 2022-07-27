import React, { useState } from 'react';

function AddFoodForm(props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings,
        };

        props.setFood((prevFoodArr) => {
            return [newFood, ...prevFoodArr];
        });

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

    return (
        <div>
            <fieldset> Add new Food
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                    <input required value={name} type="text"   placeholder='name your food'       onChange={(e) => { setName(e.target.value)     }} />
                <label>Image</label>
                    <input value={image}         type="text"   placeholder='add a Image'          onChange={(e) => { setImage(e.target.value)    }} />
                <label>Calories</label>
                    <input value={calories}      type="number" placeholder='calories per serving' onChange={(e) => { setCalories(e.target.value) }} />
                <label>Servings</label>
                    <input value={servings}      type="number" placeholder='how many serves'      onChange={(e) => { setServings(e.target.value) }} />
                <button>Add food</button>
            </form>
            </fieldset>
        </div>
    )
}

export default AddFoodForm;