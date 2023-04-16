import { Divider, Input } from "antd";
import { useState } from "react";

function  AddFoodForm(props) {

    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState("")
    const [servings, setServings] = useState()

    const handleNameEvent = e => setName(e.target.value)
    const handleCalorieEvent = e => setCalories(e.target.value)
    const handleImageEvent = e => setImage(e.target.value)
    const handleServingEvent = e => setServings(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newMeal = {
            name,
            calories,
            image,
            servings
        }

        console.log("new Food added: ", newMeal)
        props.addMeal(newMeal)

        setName("")
        setCalories(0)
        setImage("")
        setServings()
    }
    

    return (
<div>

    <form onSubmit={handleSubmit}>
    <Divider>Add Food Entry</Divider>
        <label>Name</label>
        <Input  value={name} type="text" onChange={handleNameEvent} />
        <label>Calories</label>
        <Input  value={calories} type="text" onChange={handleCalorieEvent} />
        <label>Image</label>
         <Input  value={image} type="text" onChange={handleImageEvent} />
        <label>Servings</label>
        <Input  value={servings} type="text" onChange={handleServingEvent} />
        <button type="submit">ADD</button> 
    </form>
</div>
    )
    } 



    console.log()
    console.log()
    console.log()
export default AddFoodForm