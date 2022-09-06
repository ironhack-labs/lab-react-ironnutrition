import { useState } from "react";

function AddFoodForm () {
const [name,setName]=useState("")
const [image,setImage]=useState("")
const [calories,setCalories]=useState("")
const [servings,setServings]=useState("")

const changeName = (e) => {setName(e.target.value)}
const changeImage = (e) => {setImage(e.target.value)}
const changeCalories = (e) => {setCalories(e.target.value)}
const changeServings = (e) => {setServings(e.target.value)}

    return(

        <div className="addFood">
            <form>
            <label>Name<input value={name} type="text" onChange={changeName} /></label>
            <label>Image<input value={image} type="text" onChange={changeImage} /></label>
            <label>Calories<input value={calories} type="text" onChange={changeCalories}/></label>
            <label>Servings<input value={servings} type="text" onChange={changeServings} /></label>
            </form>
            <button>Create</button>
        </div>
    )  
}


export default AddFoodForm;