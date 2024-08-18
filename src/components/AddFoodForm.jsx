// Your code here
import { useState } from "react";
import { Divider, Input, Button } from "antd";


function AddFoodForm ({addFood}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleName = (e) => setName(e.target.value) 
    const handleImage = (e) => setImage(e.target.value) 
    const handleCalories = (e) => setCalories(e.target.value) 
    const handleServings = (e) => setServings(e.target.value) 

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings};
        console.log(newFood)
        addFood(newFood)

        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }

    return (
        <div>
            <Divider>Add Food Entry</Divider>
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <Input type="text" name="name" value={name} onChange={handleName}></Input>

                <label>Image</label>
                <Input type="text" name="image" value={image} onChange={handleImage}></Input>

                <label>Calories</label>
                <Input type="number" name="calories" value={calories} onChange={handleCalories}></Input>

                <label>Servings</label>
                <Input type="number" name="servings" value={servings} onChange={handleServings}></Input>
                <Button type="submit">Create</Button>
            </form>
        </div>
        
    )
}

export default AddFoodForm