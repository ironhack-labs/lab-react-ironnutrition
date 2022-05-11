import { useState } from "react"
import React, { Component } from 'react';



function AddFood (props) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState({});
    const [image, setImage] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name: name,
            calories: calories,
            image: image
        }

        props.callbackCreateFood(newFood)


    }


    return(
        <div className="add-food">
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" name='calories' value={calories} onChange={(e) => setCalories(e.target.value)} />
        <input type="string" name='image' value={image} onChange={(e) => setImage(e.target.value)} />
        <button>Create</button>
      </form>
    </div>


    )
}


export default AddFood