// Your code here
import { useState } from 'react';

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFoodsItem = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        props.callbackToAddFoodsItem(newFoodsItem);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                
                <hr />
                <label>
                    <p>Name:</p>
                    <input
                        type="text"
                        name="name"
                        placeholder="enter food name"
                        required={true}
                        value={name}
                        onChange={(e) => {setName(e.target.value) }}
                    />
                </label>

                <label>
                    <p>Image:</p>
                    <input
                        type="text"
                        name="image"
                        placeholder="enter image URL"
                        required={true}
                        value={image}
                        onChange={(e) => {setImage(e.target.value) }}
                    />
                </label>

                <label>
                    <p>Calories:</p>
                    <input
                        type="number"
                        name="calories"
                        placeholder="enter calorie count"
                        required={true}
                        value={calories}
                        onChange={(e) => {setCalories(e.target.value) }}
                    />
                </label>

                <label>
                    <p>Servings:</p>
                    <input
                        type="text"
                        name="servings"
                        placeholder="enter number of servings"
                        required={true}
                        value={servings}
                        onChange={(e) => {setServings(e.target.value) }}
                    />
                </label>

                <br />
                <button className="submit-button">Submit Item</button>
                <br />

            </form>
        </section>

    )

}

export default AddFoodForm;