// Your code here
import { useState } from 'react'

function AddFoodForm(props) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    function handleSubmit(e){
        e.preventDefault() // when the submit button is pressed the page is not reloaded

        const newFood = {name:name, image:image, calories:calories, servings:servings}
        
        props.setFood([newFood,...props.food])
        
        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }
  return (
    <div className="AddFood">
    <h3>Add Food Entry</h3>
        <form id="add-food-form" onSubmit={handleSubmit}>
            <label>
            Name:
            <input name="name" type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/>
            </label>
            <label>
            Image:
            <input name="image" type="text" onChange={(e)=>{setImage(e.target.value)}} value={image}/>
            </label><label>
            Calories:
            <input name="calories" type="number" onChange={(e)=>{setCalories(e.target.value)}} value={calories}/>
            </label>
            <label>
            Servings:
            <input name="servings" type="number" onChange={(e)=>{setServings(e.target.value)}} value={servings}/>
            </label>
            <button>Create</button>
        </form>
    </div>
  )
}

export default AddFoodForm