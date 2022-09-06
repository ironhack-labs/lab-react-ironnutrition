import { useState } from "react";

function AddFoodForm (props) {
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
            <label><b>Name</b>
                <input value={name} type="text" onChange={changeName} />
            </label>
            <label><b>Image</b>
                <input value={image} type="url" onChange={changeImage} />
            </label>
            <label><b>Calories</b>
                <input value={calories} type="number" onChange={changeCalories}/>
            </label>
            <label><b>Servings</b>
                <input value={servings} type="number" onChange={changeServings} />
            </label>
            </form>
            <button onClick={()=> props.addFood(name, image, calories, servings)}>Create</button>
        </div>
    )  
}


export default AddFoodForm;