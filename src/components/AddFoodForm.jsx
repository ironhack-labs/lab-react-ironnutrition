import { useState } from "react";

function AddFoodForm () {
const [name,setName]=useState("")
const [image,setImage]=useState("")
const [calories,setCalories]=useState("")
const [servings,setServings]=useState("")

const handleSelect = (e) => {
    setFirstLetter(e.target.value)
    
}

    return(

        <div className="addFood">
            <form>
            <input value={name} type="text" onChange={handleSelect} />
            </form>
        </div>
    )  
}


export default AddFoodForm;