import { Input } from "antd";
import { useState } from "react";

const AddFoodForm = (props)=>{

const[name, setFormName]=useState("")
const[image, setFormImage]=useState("")
const[calories, setFormCalories]=useState("")
const[servings, setFormServings]=useState("")

const handleSubmit = (e) => {        // <==  ADD
    e.preventDefault();
    const newFood = { name, image, calories, servings }
    return newFood

}

    return(
        <div className={props.hidden === "Show More" ? "hidden": ""}>
            <form>
                <Input value = {name} placeholder="name" type="text" name="name" onChange={(e)=>{setFormName(e.target.value)}} />
                <Input value = {image} placeholder="image" type="text"  name="image" onChange={(e)=>{setFormImage(e.target.value)}} />
                <Input value = {calories} placeholder="calories" type="text"  name="calories" onChange={(e)=>{setFormCalories(e.target.value)}} />
                <Input value = {servings} placeholder="servings" type="text"  name="servings" onChange={(e)=>{setFormServings(e.target.value)}} />
                <button type="submit" onClick = {(event)=>{props.addFood(handleSubmit(event))}}>Enviar</button>
            </form>
        </div>
    )
}

export default AddFoodForm