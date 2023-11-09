import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function addFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            id: uuidv4(), //added id generator to prevent deleting all the new added foods when hitting the delete button
            name: name,
            image: image,
            calories: calories,
            servings: servings
        };

        console.log(newFood)

        props.callbackToSubmit(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    name="name"
                    type="text"
                    required={true}
                    value={name}
                    onChange={(e) => {
                        {setName(e.target.value)};
                    }}
                ></input>
            </label>
            <label>
                Image
                <input
                    name="image"
                    type="text"
                    value={image}
                    onChange={(e) => {
                        {setImage(e.target.value)};
                    }}
                ></input>
            </label>
            <label>
                Calories
                <input
                    name="calories"
                    type="number"
                    required={true}
                    value={calories}
                    onChange={(e) => {
                        {setCalories(e.target.value)};
                    }}
                ></input>
            </label>
            <label>
                Servings
                <input
                    name="servings"
                    type="number"
                    required={true}
                    value={props.servings}
                    onChange={(e) => {
                        {setImage(e.target.value)};
                    }}
                ></input>
            </label>
            <button>Create</button>
        </form>
    );
}

export default addFoodForm;