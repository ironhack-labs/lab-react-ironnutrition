import { Divider, Input } from 'antd';
import { useState } from 'react'

// Iteration 4
function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState();
    const [servings, setServings] = useState();

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {        // <==  ADD
        e.preventDefault();
        const newFood = { name, image, calories, servings };

        console.log("Submitted: ", newFood);
        props.addFood(newFood);          // <== ADD
 
        setName("");
        setImage("");
        setCalories();
        setServings();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input 
                value={name} 
                type="text" 
                onChange={handleNameInput} 
                placeholder= "Name"
            />

            <label>Image</label>
            <Input 
                value={image} 
                type="text" 
                onChange={handleImageInput} 
                placeholder= "Image"
            />

            <label>Calories</label>
            <Input 
                value={calories} 
                type="text" 
                onChange={handleCaloriesInput}
                placeholder= "Calories"
            />

            <label>Servings</label>
            <Input 
                value={servings} 
                type="text" 
                onChange={handleServingsInput} 
                placeholder= "Servings"
            />

            <button type="submit">Create</button>
            <br/><br/>
        </form>
    );
}

export default AddFoodForm;
