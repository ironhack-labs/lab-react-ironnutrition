import { useState } from "react";

function AddFoodForm(props) {

    const[name, setName] = useState("")
    const[image, setImage] = useState("")
    const[calories, setCalories] = useState("")
    const[servings, setServings] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const newFood = {
          name: name,
          image: image,
          calories: calories,
          servings: servings,
        }

        props.callbackToAddFoods(newFood)
        
        setName("");
        setImage("");
        setCalories("");
        setServings("");

    }

    return (
        <>
        <div className="food-card">
        <h2>Add Your Own Food</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:
        <input name="name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </label>
        <br />
        <label>Image:
        <input name="image" type="text" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
        </label>
        <br />
        <label>Calories:
        <input name="calories" type="number" value={calories} onChange={(e)=>{setCalories(e.target.value)}}/>
        </label>
        <br />
        <label>Servings:
        <input name="servings" type="number" value={servings} onChange={(e)=>{setServings(e.target.value)}}/>
        </label>
        <br />
        <button>Create</button>
        </form>
        </div>
        </>
        )}
                

export default AddFoodForm;