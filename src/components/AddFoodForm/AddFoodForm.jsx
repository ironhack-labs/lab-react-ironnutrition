// Your code here
import {useState} from 'react';

function AddFoodForm (props) {
    // State Variables that store form's data
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleNameInput = (e)=>{
        setName(e.target.value);
    }

    const handleImageInput = (e)=>{
        setImage(e.target.value);
    }

    const handleCaloriesInput = (e)=>{
        setCalories(e.target.value);
    }

    const handleServingsInput = (e)=>{
        setServings(e.target.value);
    }

    const handleSubmit = (e) =>{
        // Avoids form's default behaviour --> refreshing the app
        e.preventDefault();
        const newFood = {
            name, 
            image,
            calories,
            servings
        }
        //Add new Movie to the Movies List
        props.addNewFood(newFood);

        // Clear the input fields
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
        <div>
            <h4>Add a food</h4>
            <form onSubmit={handleSubmit}>

                <label>Name <input type="text" name="name" onChange={handleNameInput} value={name}></input></label>

                <label>Image <input type="text" name="image" onChange={handleImageInput} value={image}></input></label>

                <label>Calories <input type="number" name="calories" onChange={handleCaloriesInput} value={calories}></input></label>

                <label>Servings <input type="number" name="servings" onChange={handleServingsInput} value={servings}></input></label>

                <button>Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm