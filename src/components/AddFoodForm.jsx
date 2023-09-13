import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function AddNewFood(props){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

    props.callbackToAddFood(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                </label>
                <input 
                    type="text"
                    name="name"
                    placeholder="Enter the name"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}} />

                <label>
                    Image:
                </label>
                <input 
                    type="text"
                    name="image"
                    placeholder="Upload the image URL"
                    value={image}
                    onChange={(e) => {setImage(e.target.value)}} />
                
                <label>
                    Calories:
                </label>
                <input 
                    type="number"
                    min="0"
                    name="calories"
                    placeholder="Enter the calories"
                    value={calories}
                    onChange={(e) => {setCalories(e.target.value)}} />
            
                <label>
                    Servings:
                </label>
                <input 
                    type="number"
                    name="servings"
                    placeholder="Enter the servings"
                    value={servings}
                    onChange={(e) => {setServings(e.target.value)}} />
            
                <button>Create</button>
            </form>
        </section>
    )
}

export default AddNewFood;