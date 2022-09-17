import React, { useState } from 'react'
import { Input, Divider, Button } from 'antd'

const AddFoodForm = (props) => {

    const [nameInput, setNameInput] = useState('')
    const [imageInput, setImageInput] = useState('')
    const [caloriesInput, setCaloriesInput] = useState(null)
    const [servingsInput, setServingsInput] = useState(null)

    const handleClick = () => {
        const newFood = {
            name: nameInput,
            image: imageInput,
            calories: caloriesInput,
            servings: servingsInput
        }
        props.addNewFood(newFood)
        setNameInput('')
        setImageInput('')
        setCaloriesInput(0)
        setServingsInput(0)
    }


    return (
        <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
            <Divider> Add Food Entry </Divider>
            <form style={{ width: 450 }}>
                <Input
                    placeholder='Name of Food'
                    type='text'
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    style={{ marginBottom: '1em', border: '1px solid #989898' }}
                />
                <Input
                    placeholder='Image URL'
                    type='text'
                    value={imageInput}
                    onChange={(e) => setImageInput(e.target.value)}
                    style={{ marginBottom: '1em', border: '1px solid #989898' }}
                />
                <Input
                    placeholder='Calories'
                    type='number'
                    value={caloriesInput}
                    onChange={(event) => setCaloriesInput(event.target.value)}
                    style={{ marginBottom: '1em', border: '1px solid #989898' }}
                />
                <Input
                    placeholder='Servings'
                    type='number'
                    value={servingsInput}
                    onChange={(e) => setServingsInput(e.target.value)}
                    style={{ marginBottom: '1em', border: '1px solid #989898' }}
                />
                <Button onClick={handleClick}> Create </Button>
            </form>
        </div>
    )
}

export default AddFoodForm