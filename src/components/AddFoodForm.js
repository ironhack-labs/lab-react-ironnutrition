import {Divider, Input} from 'antd';
import {useState} from "react";

// Iteration 4

// Note that my approach could work without a form.
// Are there any downsides to it?

function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(null)
    const [servings, setServings] = useState(null)

    return (
        <form style={{width: "150px", display: props.isOpen ? "block" : "none"}}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={({target}) => {
                setName(target.value)
            }} />

            <label>Image</label>
            <Input value={image} type="text" onChange={({target}) => {
                setImage(target.value)
            }} />

            <label>Calories</label>
            <Input value={calories} type="number" onChange={({target}) => {
                setCalories(target.value)
            }} />

            <label>Servings</label>
            <Input value={servings} type="number" onChange={({target}) => {
                setServings(target.value)
            }} />

            <button type="button" onClick={() => {
                props.addFood({name, image, calories, servings})
                setName("");
                setImage("");
                setCalories(null);
                setServings(null);
            }}>Create</button>
        </form>
    );
}

export default AddFoodForm;
