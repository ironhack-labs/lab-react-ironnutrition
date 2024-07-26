import { useState } from "react";



function AddFoodForm({setFoodList, foodList}) {

const [name, setName] = useState('');
const [image, setImage] = useState('');
const [calories, setCalories] = useState(0);
const [servings, setServings] = useState(0);


function handleSubmit(e){
    e.preventDefault();
    let newFood = {
        'id':Math.random(1),
        name,
        image,
        calories,
        servings
    }
    let newList = [...foodList]
    newList.push(newFood)
    setFoodList(newList)
}

  return (
    <div>
        <form className="add-food" onSubmit={handleSubmit}>

        <h2>Add Food</h2>
        <div>
        <label htmlFor="name">Name</label>
        <input value={name} type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}></input>

        <label htmlFor="image">Image</label>
        <input value={image} type="text" id="image" name="image" onChange={(e)=>setImage(e.target.value)}></input>

        <label htmlFor="calories">Calories</label>
        <input value={calories} type="number" id="calories" name="calories" onChange={(e)=>setCalories(e.target.value)}></input>

        <label htmlFor="servings">Servings</label>
        <input value={servings} type="number" id="servings" name="servings" onChange={(e)=>setServings(e.target.value)}></input>
        </div>
        <button>Submit</button>

        </form>
    </div>
  )
}

export default AddFoodForm