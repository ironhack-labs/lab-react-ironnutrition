// jshint esversion:8
import React from "react";
import { useState } from "react";

export const AddNewFood = (props) => {
    
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(null);
    const [image, setImage] = useState("https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/05/manga.jpg");
    const [quantity, setQuantity] = useState(0);

    const handleAddFoodSubmit = (e) => {
        e.preventDefault();
        const newFood = {name, calories, image, quantity};
        props.handleAddFood(newFood);
    };

    

    return (

        <form onSubmit={handleAddFoodSubmit}>

            <label>Name
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" id="name"/>
            </label> <br />
            <label>Calories
                <input  value={calories} onChange={(e)=> setCalories(e.target.value)} type="number" id="calories"/>
            </label> <br />
            <label>Image
                <input value={image} onChange={(e)=> setImage(e.target.value)}  type="text" id="image"/>
            </label> <br />
            <label>Quantity
                <input  onChange={(e)=> setQuantity(e.target.value)} value={quantity} type="number" id="quantity"/>
            </label> <br/>
            
            <button type="submit">Create Food</button>

        </form>
    )
}