import { useState } from "react";

function AddFoodForm() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    return (
        <section>

            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required={true}
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
            </label>

            <label>
                Image:
                <input
                    type="url"
                    name="image"
                    placeholder="https://image.com/im"
                    required={true}
                    value={image}
                    onChange={(e) => {setImage(e.target.value)}}
                />
            </label>

            <label>
                Calories:
                <input
                    type="number"
                    name="calories"
                    placeholder="0"
                    required={true}
                    value={calories}
                    onChange={(e) => {setCalories(e.target.value)}}
                />
            </label>

            <label>
                Servings:
                <input
                    type="number"
                    name="servings"
                    placeholder="0"
                    required={true}
                    value={servings}
                    onChange={(e) => {setServings(e.target.value)}}
                />
            </label>

            <button>Create</button>

        </section>


    )
}

export default AddFoodForm;