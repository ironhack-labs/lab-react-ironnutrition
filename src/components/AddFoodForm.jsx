import React from 'react'

function AddFoodForm(props) {
  
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) =>{

        e.preventDefault();
        const newFood = {
            name, 
            image,
            calories: parseFloat(calories),
            servings: parseFloat(servings)
        }

        props.addNewMovie(newMovie);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return(
        <div>
            <h4>Add a Food</h4>
            <form onSubmit={handleSubmit}>
                <label>Name: <input type="text" name="name" onChange={(e) => setName(e.target.value)}/></label>
                <label>Image: <input type="text" name="image" onChange={(e) => setImage(e.target.value)}/></label>
                <label>Calories: <input type="number" name="calories" onChange={(e) => setCalories(e.target.value)}/></label>
                <label>Servings: <input type="number" name="servings" onChange={(e) => setServings(e.target.value)}/></label>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm
