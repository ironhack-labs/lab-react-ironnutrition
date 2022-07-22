import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState("");
    const [servings, setServings] = useState(1);

    const [booleanShow, setBooleanShow] = useState(true);

    const handleNameInput = e => setName(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleservingsInput = e => setServings(e.target.value);
    const handleSubmit = (e) => {        // <==  ADD
        e.preventDefault();
        const newFood = { name, calories, image, servings };

        console.log("Submitted: ", newFood);
        props.addFood(newFood);          // <== ADD

        // Reset the state
        setName("");
        setCalories(0);
        setImage('');
        setServings(13);
    }
    const toggleShow = () => {
        setBooleanShow(!booleanShow);
    }
    return (
        <div>
        { booleanShow && <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input
                type="text"
                name="name"
                value={name}
                onChange={handleNameInput}
            />

            <label>Image</label>
            <Input
                type="text"
                name="image"
                value={image}
                onChange={handleImageInput}
            />


            <label>Calories</label>
            <Input
                type="number"
                name="calories"
                value={calories}
                onChange={handleCaloriesInput}
            />

            <label>Servings</label>
            <Input
                type="number"
                name="servings"
                value={servings}
                onChange={handleservingsInput}
            />

            <button type="submit">Create</button>
        </form>
        }
        <button onClick={toggleShow} >{booleanShow ? 'Hide Form' : 'Show Form'}</button>

        </div>
    );
}

export default AddFoodForm;
