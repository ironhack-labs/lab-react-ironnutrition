import { Divider, Input } from 'antd';
import { useState } from "react"

export function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)


    const handleNameChange = event => {
        // console.log(event.target.value)

        setName(event.target.value)
    }

    const handleImageChange = event => {
        setImage(event.target.value)
    }

    const handleCaloriesChange = event => {
        setCalories(event.target.value)
    }

    const handleServingsChange = event => {
        setServings(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        console.log(name, image, calories, servings)

        const newFood = {
            name,
            image,
            calories,
            servings
        }

        console.log(newFood)

        props.setFood([newFood, ...props.food])

    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={props.food.name} type="text" onChange={handleNameChange} required />

      <label>Image</label>
      <Input value={props.image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={props.calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={props.servings} type="number" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
  );
}

 