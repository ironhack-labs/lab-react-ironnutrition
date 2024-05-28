import { useState } from "react";

function AddFood ({addFood}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
    

    const newFood = {
        _id: Math.random().toString(),
        name: name,
        image: image,
        calories: calories,
        servings: servings
    }
    addFood(newFood)

    setName("")
    setImage("")
    setCalories(0)
    setServings(0)

}
return (
    <form className="add-food" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            >
        </input>
        <label htmlFor="image">Image</label>
        <input 
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            >
        </input>
        <label htmlFor="calories">Calories</label>
        <input 
            type="number"
            name="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            >
        </input>
        <label htmlFor="servings">Servings</label>
        <input 
            type="number"
            name="servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            >
        </input>
        
        <button type="submit">Create</button>
    </form>
    
)
}

export default AddFood