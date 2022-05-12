import React from "react";
import {useState} from 'react';


function AddNewFood({addFood}) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    

const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
        name: name,
        calories: calories,
        image: image
    };

    addFood(newFood);
    setName("");
    setCalories("");
    setImage("");
    setIsVisible(false);
}

const showForm = () => {
    setIsVisible(true);
}




    return(
        <div className="addFood">
        <button onClick={showForm}>Add New Food</button>
            {isVisible ? 
            <form onSubmit={handleSubmit}>
                <br></br>
                <label>Name:<input type='text' name='name' value={name} onChange={(e) => {setName(e.target.value)}}></input> </label>
                <label>Calories: <input type='number' name='calories' value={calories} onChange={(e) => {setCalories(e.target.value)}}></input></label>
                <label>Image: <input type='text' name='image' value={image} onChange={(e) => {setImage(e.target.value)}}></input></label>
                <button>Submit</button>
            </form> : ""}

        </div>
    )
}

export default AddNewFood;