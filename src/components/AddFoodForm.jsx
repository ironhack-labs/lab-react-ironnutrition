// Your code here
import { useState } from "react";

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood ={name, image, calories, servings};
        props.addFood(newFood);

        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }



    return (
        
        <form onSubmit = { handleSubmit } >
        <label>
        Name: 
        <input type= "text" name="name" value={name} onChange={handleNameInput}/>
        </label>
        <label>
            Image:
            <input type="image" name="image" value={image} onChange={handleImageInput}/>
        </label>
        <label>
            calories:
            <input type="number" name="calories" value={calories} onChange={handleCaloriesInput}/>
        </label>
        <label>
            Serving:
            <input type="number" name="serving" value={servings} onChange={handleServingsInput}/>
        </label>
        <button type ="submit">Creat</button>
    
</form>

    )

}

export default AddFoodForm;
