import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = (e) => setName(e.target.value);

    const handleImageInput = (e) => setImage(e.target.value);

    const handleCaloriesInput = (e) => setCalories(e.target.value);

    const handleServingsInput = (e) => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        const newFood = { id, name, image, calories, servings };
        props.addFood(newFood)

        //Reset the state
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);


    }

    return (
        <div className="AddFood">
            <h4>Add a Food</h4>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleNameInput} />
                <br />
                <label>Image:</label>
                <input type="text" name="image" value={image} onChange={handleImageInput} />
                <br />
                <label>Calories:</label>
                <input type="number" name="calories" value={calories} onChange={handleCaloriesInput} />
                <br />
                <label>Servings:</label>
                <input type="number" name="servings" value={servings} onChange={handleServingsInput} />
                <br />
                <br />
                <button type="submit">Add a Food</button>
            </form>
        </div>
    );
}
export default AddFoodForm;