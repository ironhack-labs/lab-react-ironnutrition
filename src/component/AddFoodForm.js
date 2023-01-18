import { useState } from "react"
import "./AddFoodForm.css"
export default function AddFoodForm(props){

    const{createFood,isHidden}=props
    const [name, setName] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")
    const [image, setImage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            "name": name,
            "calories": calories,
            "servings": servings,
            "image": image
        }
        createFood(newFood);   

        setName("")
        setCalories("")
        setServings("")
        setImage("")
    }
    return (
        <div hidden= {isHidden}>

        <form  className="food-form"   onSubmit={handleSubmit}>
            <label>Name <br/>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Name of the food" 
                  value={name} 
                  onChange = {(e) => {setName(e.target.value)}}
                  />
            </label>
            <label>Calories<br/>
                <input 
                  name="calories" 
                  type="number" 
                  placeholder="0" 
                  value={calories} 
                  onChange = {(e) => {setCalories(e.target.value)}}
                  />
            </label>
            <label>Servings<br/>
                <input 
                  name="servings" 
                  type="number" 
                  placeholder="0" 
                  value={servings} 
                  onChange = {(e) => {setServings(e.target.value)}}
                  />
            </label>
            <label>Image<br/>
                <input 
                  name="image" 
                  type="url" 
                  placeholder="url" 
                  value={image} 
                  onChange = {(e) => {setImage(e.target.value)}}
                  />
            </label>
            <button className="add-button create-button">Create</button>
           
        </form>
        </div>
    )
}