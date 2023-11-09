import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function addFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            id: uuidv4(), //added id generator to prevent deleting all the new added foods when hitting the delete button
            name: name,
            image: "https://perspectives.agf.com/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png",
            calories: calories,
            servings: servings
        };

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
                    placeholder="Food name"
                    required={true}
                    value={name}
                    onChange={(e) => {
                        {setName(e.target.value)};
                    }}
                ></input>
            </label>
            <br/>
            <label>
                Image
                <input
                    name="image"
                    type="text"
                    placeholder="Link to image"
                    value={image}
                    onChange={(e) => {
                        {setImage(e.target.value)};
                    }}
                ></input>
            </label>
            <br/>
            <label>
                Calories
                <input
                    name="calories"
                    type="number"
                    required={true}
                    min={0}
                    value={calories}
                    onChange={(e) => {
                        {setCalories(e.target.value)};
                    }}
                ></input>
            </label>
            <br/>
            <label>
                Servings
                <input
                    name="servings"
                    type="number"
                    required={true}
                    min={1}
                    value={servings}
                    onChange={(e) => {
                        {setServings(e.target.value)};
                    }}
                ></input>
            </label>
            <br/>
            <button>Create</button>
        </form>
    );
}

export default addFoodForm;