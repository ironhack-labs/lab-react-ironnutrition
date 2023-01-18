import { useState } from 'react';

export default function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFoodItem = {
        "name": name,
        "image": image,
        "calories": calories,
        "servings": servings
        }
    
        props.callbackAddFoodForm(newFoodItem);

        //clearing form
        setName(""); setImage(""); setCalories(0); setServings(0);
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name
            <input 
                type="text" 
                name="name" 
                placeholder="enter the name"
                value={name}
                onChange={(e) => {setName(e.target.value)}} />
            </label>
            <label> Image
            <input 
                type="url" 
                name="image"
                value={image}
                onChange={(e) => {setImage(e.target.value)}} />
            </label>
            <label> Calories
            <input 
                type="number" 
                name="calories" 
                placeholder="calories"
                value={calories} 
                onChange={(e) => {setCalories(e.target.value)}} />
            </label>
            <label> Servings
            <input
                type="number"
                name="servings"
                placeholder="servings"
                value={servings} 
                onChange={(e) => {setServings(e.target.value)}} />
            </label>
        
            <button>Create</button>
      </form>
    )
}