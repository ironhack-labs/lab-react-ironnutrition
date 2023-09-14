// Your code here

import { useState } from 'react'


function AddFoodForm(props) {

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
        }

        props.callBackToAddFood(newFood);         

        // clear form
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
        <section>
            <h3>Add New Food</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="enter the name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>
                <label>
                    Image
                    <input
                        type="text"
                        name="image"
                        required
                        placeholder="enter the image URL"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </label>
                <label>
                    Calories
                    <input
                        type="number"
                        name="calories"
                        required
                        placeholder="enter the calories"
                        value={calories}
                        onChange={(e) => { setCalories(e.target.value) }}
                    />
                </label>
                <label>
                    Servings
                    <input
                        type="number"
                        name="servings"
                        required
                        placeholder="enter the servings"
                        value={servings}
                        onChange={(e) => { setServings(e.target.value) }}
                    />
                </label>
                <button>Create</button>
            </form>
        </section>
    )
}

export default AddFoodForm;