import React, { useState } from "react";
import { Divider, Input, Button } from "antd";

export default function AddFoodForm(props) {
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
            servings: servings,
        };
        props.callbackToAddFood(newFood);
        setName("");
        setImage("");
        setCalories("");
        setServings("");
        console.log(newFood);
    };
    return (
        <section>
            <Divider>Add Food Entry</Divider>
            <form onSubmit={handleSubmit}>
                <label>
                    Name :
                    <Input
                        type="text"
                        name="name"
                        required={true}
                        placeholder="enter the name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Image :
                    <Input
                        type="text"
                        name="image"
                        placeholder="enter the image url"
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Calories :
                    <Input
                        type="number"
                        name="calories"
                        placeholder="enter the calorie"
                        value={calories}
                        onChange={(e) => {
                            setCalories(e.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Servings :
                    <Input
                        type="number"
                        name="servings"
                        placeholder="enter the servings"
                        value={servings}
                        onChange={(e) => {
                            setServings(e.target.value);
                        }}
                    />
                </label>
                <br />
                <button>Create</button>
            </form>
        </section>
    );
}
