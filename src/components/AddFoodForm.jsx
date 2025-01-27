import {useState} from "react"
import "./AddFoodForm.css"

function AddFoodForm( {addFood} ) {
    const [name, setName] = useState ("")
    const [image, setImage] = useState ("")
    const [calories, setCalories] = useState (0)
    const [servings, setServings] = useState (0)

    const handleSubmit = (e) => {
        e.preventDefault()

        if( 
            name === "" ||
            image === "" ||
            calories === 0 ||
            servings === 0 
        ) return

        addFood ( {
            id: Math.random().toString(),
            name:name,
            image:image,
            calories:calories,
            servings:servings
        })
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor = "name" > Name</label>
                <input 
                    type = "text" 
                    name = "name"
                    value = {name}
                    onChange = { (e) => setName(e.target.value)}
                 />
            </div>
            <div className="form-group">
                <label htmlFor = "image" > Image</label>
                <input 
                    type = "text" 
                    name = "name" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="calories">Calories</label>
                    <input 
                    type="number" 
                    name="calories"
                    value={calories}
                    onChange={(e) => setCalories(Number(e.target.value))} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="servings">Servings</label>
                    <input 
                    type="number" 
                    name="servings"
                    value={servings}
                    onChange={(e) => setServings(Number(e.target.value))} 
                    />
                </div>

                <button type="submit">Create</button>
                </form>
            )
}

export default AddFoodForm

            