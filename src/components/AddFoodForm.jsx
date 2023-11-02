import { Divider, Input, Button } from "antd";
import { useState } from "react"
export default function AddFoodForm(props){
    const [foodForm, setFoodForm] = useState(
        {
            name: "",
            image: "",
            calories: "",
            servings: ""
        }
    )
    function inputFunc(e){
        const {name, value } = e.target;
        setFoodForm(prevArr=>{return {...prevArr, [name]: value}})
    }
    function handleClick(e){
        e.preventDefault();
        props.addMeal(foodForm)
    }

    return(
        <div id="form-container">
            <h2>Add Food Entry</h2>
            <form>
                <label htmlFor="name-input"><strong>Name</strong></label>
                <Input type="text" id="name-input" name="name" onChange={inputFunc} value={foodForm.name}/>
                <br></br>
                <br></br>
                <label htmlFor="image-input"><strong>Image</strong></label>
                <Input type="text" id="image-input" name="image" onChange={inputFunc} value={foodForm.image}/>
                <br></br>
                <br></br>
                <label htmlFor="calories-input"><strong>Calories</strong></label>
                <Input type="number" id="calories-input" name="calories" onChange={inputFunc} value={foodForm.calories}/>
                <br></br>
                <br></br>
                <label htmlFor="servings-input"><strong>Servings</strong></label>
                <Input type="number" id="servings-input" name="servings" onChange={inputFunc} value={foodForm.servings}/>
                <br></br>
                <br></br>
                <Button onClick={handleClick} id="create-button">Create</Button>
                <Divider />
            </form>
        </div>
    )
}