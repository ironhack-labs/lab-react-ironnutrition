import { Input, Button } from "antd";
import { useState } from "react";

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const createClickHandler = (e) => {
        e.preventDefault()
        
        const newFood = {
            name,
            image,
            calories,
            servings
        };

        //Call app function to add new food
        props.addNewFood(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    };

    return (
        <form>
            <label>
                Name
                <Input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            
            <label>
                Image
                <Input type="text" name="image" value={image} onChange={(e) => {setImage(e.target.value)}}/>
            </label>
            
            <label>
                Calories:
                <Input type="number" name="calories" value={calories} onChange={(e) => {setCalories(e.target.value)}}/>
            </label>
            <label>
                Servings:
                <Input type="number" name="servings" value={servings} onChange={(e) => {setServings(e.target.value)}}/>
            </label>

            <Button onClick={createClickHandler}>Create</Button>
        </form>
    );
}

export default AddFoodForm;