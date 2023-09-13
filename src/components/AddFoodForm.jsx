import { useState } from "react";

function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const foodInfo = {
            name: name,
            image: image,
            calories: calories,
            servings: servings,
        };

        props.callBackToAddFood(foodInfo);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
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

                <label>
                    Image:
                    <input
                        name="image"
                        type="text"
                        required={true}
                        placeholder="add image"
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value);
                        }}
                    />
                </label>

                <label>
                    Calories:
                    <input
                        name="calories"
                        type="number"
                        required={true}
                        placeholder="add calories"
                        value={calories}
                        onChange={(e) => {
                            setCalories(e.target.value);
                        }}
                    />
                </label>

                <label>
                    Servings:
                    <input
                        name="servings"
                        type="number"
                        required={true}
                        placeholder="add servings"
                        value={servings}
                        onChange={(e) => {
                            setServings(e.target.value);
                        }}
                    />
                </label>

                <button>Create</button>

            </form>

        </section>

    );
}

export default AddFoodForm;