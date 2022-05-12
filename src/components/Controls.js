import React from 'react'
import { useState } from 'react'

function Controls(props) {
    // const showForm = () => {

    // }

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState('')
    const [form, setForm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setFood((prevFood) => {
            const newArray = [...prevFood, {
                name: name,
                image: image,
                calories: calories,
            }]
            return newArray
        })
        setName('')
        setImage('')
        setCalories('')
        setForm(false)
    }

    const handleName = ((e) => {
        setName(e.target.value)
    })
    const handleImage = ((e) => {
        setImage(e.target.value)
    })
    const handleCalories = ((e) => {
        setCalories(e.target.value)
    })

    const showForm = () => {
        setForm(true)
    }

  

    return (
        <>
            <button onClick={showForm}>Show Form</button>
            {form ? 
            <form onSubmit={handleSubmit}>
                <input placeholder="Food" type='text' name="name" value={name} onChange={handleName}></   input>
                <input placeholder="Image" type='text' name="image" value={image} onChange={handleImage}></ input>
                <input placeholder="Calories" type='number' name="calories" value={calories} onChange={handleCalories}></ input>
                <br />
                <button>Create</button>
            </form> : ''}
        </>
    )
}

export default Controls