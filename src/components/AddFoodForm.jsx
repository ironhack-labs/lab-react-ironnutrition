import { Input, Button } from "antd"
import { useState } from "react"

function AddFoodForm(props) {
    const [ name, setName ] = useState("")
    const [ image, setImage ] = useState("https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg")
    const [ calories, setCalories ] = useState(0)
    const [ servings, setServings ] = useState(1)

    const handleNameChange = event => {
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
        props.addNewFood({ name, image, calories, servings })
    }

return (
    <div className="AddFood">
        <h2>Add new food</h2>
        <Input  type="text" onChange={handleNameChange} placeholder="Name" className="new-food-input"/>
        <Input  type="text" onChange={handleImageChange} placeholder="Image url" className="new-food-input"/>
        <Input  type="number" onChange={handleCaloriesChange} placeholder="Calories" className="new-food-input"/>
        <Input  type="number" onChange={handleServingsChange} placeholder="Servings" className="new-food-input"/>

        <Button type="primary" onClick={handleSubmit}>Add new food</Button>
    </div>
    
)
}

export default AddFoodForm