import { Divider, Input, Button, Card } from "antd";
import { useState } from "react"
import './AddFoodForm.css'

const AddFoodForm = ({ addNewFood }) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleFoodName = (event) => {
        const { value } = event.target
        setName(value)
    }

    const handleImage = (event) => {
        const { value } = event.target
        setImage(value)
    }

    const handleCalories = (event) => {
        const { value } = event.target
        setCalories(value)
    }

    const handleServings = (event) => {
        const { value } = event.target
        setServings(value)
    }

    const handleFoodSubmit = (event) => {
        event.preventDefault()
        const newFood = {
            id: Math.floor(Math.random() * 1000000),
            image: image,
            name: name,
            calories: calories,
            servings: servings
        }
        addNewFood(newFood)
    }

    return (
        <form className="add-food-form" onSubmit={handleFoodSubmit}>
            <Divider>Add Food Entry</Divider>
            <Card style={{ width: 230, height: 300, margin: 10, margin: '10px auto' }}>
                <label>Name</label>
                <Input type="text" placeholder="Name" value={name} onChange={handleFoodName} />
                <label>Image</label>
                <Input type="text" placeholder="https://example.com" value={image} onChange={handleImage} />
                <label>Calories</label>
                <Input type="number" placeholder="Calories" min={0} value={calories} onChange={handleCalories} />
                <label>Servings</label>
                <Input type="number" placeholder="Servings" min={0} value={servings} onChange={handleServings} />
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                        backgroundColor: 'white',
                        color: 'black',
                        margin: '10px auto'
                    }}
                >Create</Button>
            </Card>
        </form>
    )
}

export default AddFoodForm