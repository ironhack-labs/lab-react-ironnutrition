import React from 'react'
import {useState} from 'react'
import {Form, Input, InputNumber, Button} from 'antd'

export default function AddFoodForm({onAddFood}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState(1);
    const handleSubmit = (e) =>{
        e.preventDefault();{
            const newFood ={
                name,
                image,
                calories,
                servings,
            };
         onAddFood(newFood);
        }
    }
  return (
        <Form onSubmitCapture={handleSubmit} layout="inline" style={{ margin: 10 }}>

            <Form.Item label="Name">
                <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>

            <Form.Item label="Image">
                <Input value={image} onChange={(e) => setImage(e.target.value)} />
            </Form.Item>

            <Form.Item label="Calories">
                <InputNumber value={calories} onChange={(val) => setCalories(val)} />
            </Form.Item>

            <Form.Item label="Servings">
                <InputNumber value={servings} onChange={(val) => setServings(val)} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Create</Button>
            </Form.Item>

        </Form>
    )
}
