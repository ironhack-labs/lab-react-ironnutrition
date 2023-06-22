import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {
    // const [foodName, setFoodName] = useState("");
    // const [foodImage, setfoodImage] = useState("");
    // const [foodCalories, setfoodCalories] = useState("");
    // const [foodServings, setfoodServings] = useState("");
    const [foodInputs, setfoodInputs] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.callbackAddFood({
            "name": foodInputs.name,
            "calories": foodInputs.calories,
            "image": foodInputs.image,
            "servings": foodInputs.servings
        });
        setfoodInputs({}) // clear the form
    }

    const handleChange = (e) => {
        setfoodInputs({...foodInputs, [e.target.name]: e.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input name="name" value={foodInputs.name} type="text" onChange={(e) => handleChange(e)} />

            <label>Image</label>
            <Input name="image" value={foodInputs.image} type="text" onChange={(e) => handleChange(e)} />

            <label>Calories</label>
            <Input name="calories" value={foodInputs.calories} type="text" onChange={(e) => handleChange(e)} />

            <label>Servings</label>
            <Input name="servings" value={foodInputs.servings} type="text" onChange={(e) => handleChange(e)} />

            <button type="submit"> Create </button>
        </form>
    );
}

export default AddFoodForm;