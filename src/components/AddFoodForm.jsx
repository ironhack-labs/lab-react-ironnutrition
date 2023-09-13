import { useState } from "react";


function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const foodDetails = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        // invoke function in the parent component
        props.callbackToAdd(foodDetails);

        // clear form
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }


    return (
        <section>
            <header>
                <h2>Add food entry</h2>
            </header>
            <form onSubmit={handleSubmit}>

                <label>
                   Name:
                    <input
                        type="text"
                        name="name"
                        required={true}
                        placeholder="enter the name"
                        // value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>


                <label>
                   Image:
                    <input
                        type="file"
                        name="image"
                        required={true}
                        placeholder="add the image"
                        // value={name}
                        // onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                Calories:
                    <input
                        type="number"
                        name="calories"
                        required={true}
                        placeholder="enter calories"
                        min={1}
                        // value={name}
                        onChange={(e) => { setCalories(e.target.value) }}
                    />
                </label>

                <label>
                Servings:
                    <input
                        type="number"
                        name="servingss"
                        required={true}
                        placeholder="enter servings"
                        min={1}
                        // value={name}
                        onChange={(e) => { setServings(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
        </section>
    )
}

export default AddFoodForm;


