import { useState } from "react"

export default function AddFoodForm(props){
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
    props.createFood(newFood);   
    }
    return (

        <form onSubmit={handleSubmit}>
            <label>Name
                <input
                    name="name"
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </label>
            <label>Calories
                <input
                    name="calories"
                    type="number"
                    placeholder="0"
                    value={calories}
                    onChange={(e) => { setCalories(e.target.value) }}
                />
            </label>
            <label>Servings
                <input
                    name="servings"
                    type="number"
                    placeholder="0"
                    value={servings}
                    onChange={(e) => { setServings(e.target.value) }}
                />
            </label>
            <label>Image
                <input
                    name="image"
                    type="url"
                    placeholder="url"
                    value={image}
                    onChange={(e) => { setImage(e.target.value) }}
                />
            </label>
            <button>Create</button>
        </form>

    )
}