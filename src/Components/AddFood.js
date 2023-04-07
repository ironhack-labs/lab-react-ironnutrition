import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from "react";

function AddFood(props) {

    const { addFood, showForm } = props

    const [name, setFoodName] = useState("")
    const [image, setFoodImg] = useState("")
    const [calories, setFoodCal] = useState(0)
    const [servings, setFoodServ] = useState(0)

    let handleNameInput = (e) => { setFoodName(e.target.value) }
    let handleImageInput = (e) => { setFoodImg(e.target.value) }
    let handleCaloriesInput = (e) => { setFoodCal(e.target.value) }
    let handleServingsInput = (e) => { setFoodServ(e.target.value) }

    let handleSubmit = (e) => {
        e.preventDefault()
        const newFood = { name, image, calories, servings }
        console.log(newFood);

        addFood(newFood)
        setFoodName("")
        setFoodImg("")
        setFoodCal(0)
        setFoodServ(0)
    }

    if (showForm === 'Add New Food') {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Card style={{ backgroundColor: 'pink', width: 500, height:450 }}>
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <Divider>Add Food Entry</Divider>
                            <label>Name:</label>
                            <Input type='text' name='name' value={name} onChange={handleNameInput} /><br></br>
                            <label>Image:</label>
                            <Input type='text' name='image' value={image} onChange={handleImageInput} /><br></br>
                            <label>Calories:</label>
                            <Input type='number' name='calories' value={calories} onChange={handleCaloriesInput} /><br></br>
                            <label>Servings:</label>
                            <Input type='number' name='servings' value={servings} onChange={handleServingsInput} />
                            <Divider></Divider>
                            <Button style={{ backgroundColor: 'grey' }}><button type='submit' style={{ backgroundColor: 'grey', borderStyle: 'none' }}>Submit</button></Button>
                        </form>
                    </Col>
                </Card>
            </div>
        )
    }

    else {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card style={{ width: 500, height:450}}></Card>
            </div>
        )
    }

}

export default AddFood;