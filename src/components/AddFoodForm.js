import { Divider, Input } from 'antd';
import { useState } from "react";
import './AddFoodForm.css'

function AddFoodForm (props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState();
    const [calories, setCalories] = useState();
    const [servings, setServings] = useState(); 

    return (
        
        <div className="AddFood">
            <Divider>Add Food Entry</Divider>'
                <form className="form-list">
                    <label>Name: </label>
                    <Input 
                        value={name} 
                        type="text"  
                    />

                    <label>Image: </label>
                    <Input 
                        value={image} 
                        type="url"  
                    />

                    <label>Calories: </label>
                    <Input 
                        value={calories} 
                        type="number"  
                    />

                    <label>Servings: </label>
                    <Input 
                        value={servings} 
                        type="number"  
                    />

                    <button type="submit">Create</button>
                </form>
        </div>
    )
}

export default AddFoodForm;

