import { useState } from "react";
import { Card, Divider, Input} from "antd";

function AddFood (props){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")
    const [id, setId] = useState(0)

    const handleNameInput =(e)=>{
        setName(e.target.value);
    }

    const handleImageInput =(e)=>{
        setImage(e.target.value);
    }

    const handlecaloriesInput =(e)=>{
        setCalories(e.target.value);
    }

    const handleServingsInput =(e)=>{
        setServings(e.target.value);
    }

    const handleIdInput =()=>{
        setId(Math.floor((100000000 + Math.random() * 900000000)))
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        if (name === "" || image === "" || calories === "" || servings === "") {
            alert("Please fill in all fields before submitting.");
            return
          }
        const newFood = {id, name, image, calories, servings}
        props.addfood(newFood);
        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

    return(
        <Card id="form-add">
            <Divider>Add a Food</Divider>
            <form onSubmit={handleSubmit}>
                <label>Name: <Input type="text" name="name" onChange={handleNameInput} value={name}></Input></label>
                <label>Image: <Input type="text" name="image" onChange={handleImageInput} value={image}></Input></label>
                <label>Calories: <Input type="number" name="calories" onChange={handlecaloriesInput} value={calories}></Input></label>
                <label>servings: <Input type="number" name="servings" onChange={handleServingsInput} value={servings}></Input></label>
                <button type="submit" id="button-add" onClick={handleIdInput} value={id}>Add a Food</button>
            </form>
        </Card>
    )
}

export default AddFood