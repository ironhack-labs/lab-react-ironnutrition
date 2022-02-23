import {useState} from "react";
import React from "react";

function AddFood (props) {
    const { addNewFood, displayForm } = props;
    const [name, setName ] = useState("");
    const [calories, setCalories ] = useState("");
    const [image, setImage ] = useState("");
    
    const handleNameInput = e => setName(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    
    function submitHandler (e) {
        e.preventDefault();
        const newFood = {name, calories, image}
        console.log("newFood :", newFood);
        addNewFood(newFood);
        setName("");
        setCalories("");
        setImage("");
        displayForm();
    }

    return (
        <form onSubmit={submitHandler}>
            <label> Name
                <input 
                type="text" 
                name="name" 
                value={name}
                onChange={handleNameInput}
                />
            </label>
            <label>Calories
                <input 
                type="number" 
                name="calories" 
                value={calories}
                onChange={handleCaloriesInput}
                />
            </label>
            <label htmlFor=""> Image-url
                <input 
                type="text" 
                name="image"
                value={image}
                onChange={handleImageInput}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddFood;