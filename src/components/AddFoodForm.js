import { Divider, Input } from 'antd';
import { useState } from "react";
import './AddFoodForm.css'
//import foodsData from '../foods.json'

function AddFoodForm (props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState();
    const [calories, setCalories] = useState();
    const [servings, setServings] = useState(); 

    const handleNameInput = (event) => setName(event.target.value); 
    const handleImageInput = (event) => setImage(event.target.value); 
    const handleCaloriesInput = (event) => setCalories(event.target.value); 
    const handleServingsInput = (event) => setServings(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings,
        }
        props.addNewFood(newFood)
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setImage();
        setCalories();
        setServings();
    }

    return (
        
        <div className="AddFood">
            <Divider>Add Food Entry</Divider>'
                <form className="form-list" onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <Input 
                        value={name} 
                        type="text"  
                        onChange={handleNameInput}
                    />

                    <label>Image: </label>
                    <Input 
                        value={image} 
                        type="url"  
                        onChange={handleImageInput}
                    />

                    <label>Calories: </label>
                    <Input 
                        value={calories} 
                        type="number"  
                        onChange={handleCaloriesInput}
                    />

                    <label>Servings: </label>
                    <Input 
                        value={servings} 
                        type="number"  
                        onChange={handleServingsInput}
                    />

                    <button type="submit">Create</button>
                </form>
        </div>
    )
}

export default AddFoodForm;

