
import { useState } from "react"

import { v4 as uuidv4 } from 'uuid'

function AddFoodForm({ setFoods, foods }) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()

    let newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
      id: uuidv4()
    }

    setFoods([newFood, ...foods])

    setName('')
    setImage('')
    setCalories(0)
    setServings(0)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Name
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
        </label>
        <label>
            Image
            <input type="text" value={image} onChange={(e) => {setImage(e.target.value)}}/>
        </label>
        <label>
            Calories
            <input type="number" value={calories} onChange={(e) => {setCalories(e.target.value)}}/>
        </label>
        <label>
            Servings
            <input type="number" value={servings} onChange={(e) => {setServings(e.target.value)}}/>
        </label>

        <button>Create</button>
      </form>
    </div>
  )
}

export default AddFoodForm


