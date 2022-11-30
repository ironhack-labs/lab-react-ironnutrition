import { v4 as uuidv4 } from "uuid"
import { useState }     from "react";
import foods            from '../foods.json';

function AddFoodForm(props) {
    //const [foodList, setFoodList] = useState(foods);
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
    const [name, setName]         = useState("");
    const [image, setImage]       = useState("");

    /* Functions */
    const handleNameChange      = event => {
        setName(event.target.value);
    };
    const handleImageChange     = event => {
        setImage(event.target.value);
    };
    const handleCaloriesChange  = event => {
        setCalories(event.target.value);
    };
    const handleServingsChange  = event => {
        setServings(event.target.value);
    };

    // Submit form 
    const handleSubmit          = event => {
        // Prevent the site from being refreshed
        event.preventDefault();
        // Create a new movie based on the state values
        const newFood = {
           /*  _id: uuidv4(), */
            name,
            image,
            calories,
            servings
        }
        console.log(newFood);
        console.log(...props.foodList)
        // Add new movie to movies list
        props.setFoodList([newFood, ...props.foodList]);
        //console.log(props.foodList)

        // Reset input fields
        setName("");
        setImage("");
        setCalories(0);
        setServings(0); 
    }
    return (
        <form onSubmit={ handleSubmit } className="form">
            <label htmlFor="name">Name </label>
            <input value={ name } type="text" onChange={ handleNameChange } required />

            <label htmlFor="image">Image </label>
            <input value={ image } type="text" onChange={ handleImageChange } />

            <label htmlFor="calories">Calories </label>
            <input value={ calories } type="number" onChange={ handleCaloriesChange } required />

            <label htmlFor="servings">Servings </label>
            <input value={ servings } type="number" onChange={ handleServingsChange } required />

            <button type="Create">Create</button>
        </form>
    );
}

export default AddFoodForm;