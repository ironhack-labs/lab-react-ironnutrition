import { useState } from "react";
import React from "react";

function AddFood(props) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name,
            calories,
            quantity
        }

        props.createFood(newFood);

        setName("");
        setCalories("");
        setQuantity("");
    }

    return (
        <div className="AddFood">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="number" name="year"  placeholder="xxxx" value={calories} onChange={(e) => { setCalories(e.target.value) }} />
                <input type="number" name="rating" placeholder="1-10" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                <button>Create</button>
            </form>
        </div>
    )
}

export default AddFood;