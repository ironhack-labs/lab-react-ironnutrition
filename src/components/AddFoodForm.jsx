// Your code here
import React from 'react'
import { useState } from 'react'


function AddFoodForm(props) {
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [calories,setCalories] = useState(0)
    const [servings,setServings] = useState(0)


    function handleSubmit(e){
        e.preventDefault() 

        const newFood = {name:name,image:image,calories:calories,servings:servings}

        console.log(newFood)

        props.addFood(newFood)

        setName('')
        setImage('')
        setCalories(0)
        setServings(0)
    }

  return (
    <div>
     <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} />
            </label>
            <label>
                Image:
                <input type="text" onChange={(e)=>{setImage(e.target.value)}} value={image} />
            </label>
            <label>
                Calories:
                <input type="number" onChange={(e)=>{setCalories(e.target.value)}} value={calories} />
            </label>
            <label>
                Servings:
                <input type="number" onChange={(e)=>{setServings(e.target.value)}} value={servings} />
            </label>

            <button>Create</button>
        </form>
    </div>
  )
}
export default AddFoodForm