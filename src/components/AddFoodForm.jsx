import { useState } from "react";

function AddFoodForm({ newFoodItem }) {
    const [foodName, setFoodName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name: foodName,
            image: image,
            calories: parseInt(calories),
            servings: parseInt(servings)
        }

        newFoodItem(newFood);

        setFoodName("");
        setImage("");
        setCalories(0);
        setServings(0);

    }


    return (
        <form className="add-new-item" onSubmit={handleSubmit}>
            <h4>Add a new food item to the list!</h4>
            <label>Name:<input name="name" type="text" value={foodName}
                onChange={(e) => { setFoodName(e.target.value) }} /> </label>

            <label>Image:<input name="image" type="text" value={image}
                onChange={(e) => { setImage(e.target.value) }} /> </label>

            <label>Calories:<input name="calories" type="number" value={calories}
                onChange={(e) => { setCalories(e.target.value) }} /> </label>

            <label>Servings:<input name="servings" type="number" value={servings}
                onChange={(e) => { setServings(e.target.value) }} /> </label>

            <button type="submit">Create</button>

        </form>

    )


}

export default AddFoodForm;