import {useState} from "react"

function AddFood (props) {
const [name, setName] = useState("")
const [image, setImage] = useState("")
const [calories, setCalories] = useState("")
const [servings, setServings] = useState("")

const handleNameInput = (e) => {
    const newName = e.target.value
    setName(newName)


}

    const handleImageInput = (e) => {
        const newImage = e.target.value
        setImage(newImage)
    

}


const handleCaloriesInput = (e) => {
    const newCalories = e.target.value
    setCalories(newCalories)

}

const handleServingsInput = (e) => {
    const newServings = e.target.value
    setServings(newServings)
}

const handleSubmit = (e) => {
    e.preventDefault()

const newFood = {
    name: name,
    image: image,
    calories: calories,
    servings: servings
}

props.addNewFood(newFood)

setName("")
setImage("")
setCalories("")
setServings("")

}


    return(
        <div>
            <h3>Add Food Entry</h3>
            <form onSubmit = {handleSubmit}>
                <label> Name:
                <input type= "text" name="name" value = {name} onChange = {handleNameInput}>

                </input>
                </label>
   
                <label> Image:
                <input type= "text" name="image" value = {image} onChange = {handleImageInput}>

                </input>
                </label>

                <label> Calories:
                <input type= "number" name="calories" value = {calories} onChange = {handleCaloriesInput}>

                </input>
                </label>


                <label> Servings:
                <input type= "number" name="servings" value = {servings} onChange = {handleServingsInput}>

                </input>
                </label>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AddFood