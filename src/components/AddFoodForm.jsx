import { useState } from "react"

function AddFoodForm(){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
    const handleNameInput = event => setName(event.target.value);
    const handleImageInput = event => setImage(event.target.value);
    const handleCaloriesInput = event => setCalories(event.target.value);
    const handleServingsInput = event => setServings(event.target.value);
    function handleSubmit(event){
        event.preventDefault()
        const newFood = {"name" : name, "image" : image, "calories" : calories, "servings" : servings}
        props.addFoodFunction(newFood)
        }
    return(
       <div>
        <form>
            <label >Name:</label>
            <input type="text" name="name" value={name} onChange={handleNameInput}/>
            <label >Image:</label>
            <input type="text" name="image" value={image} onChange={handleImageInput}/>
            <label >Calories:</label>
            <input type="number" name="calories" value={calories} onChange={handleCaloriesInput}/>
            <label >Servings:</label>
            <input type="number" name="servings" value={servings} onChange={handleServingsInput}/>
        <button onClick={()=>handleSubmit} htmlType="submit">Create</button>
        </form>
       </div> 
    )
}
export default AddFoodForm