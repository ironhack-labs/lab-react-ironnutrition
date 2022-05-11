import React, { useState } from 'react'

function Add() {

    const [foodName, setName] = useState("");
    const [foodCalories, setCalories] = useState('');
    const [foodImage, setImage] = useState('');

    const [showForm, setShowForm] = useState(false);

    const showMyForm = (e) => {
        e.preventDefault()
        setShowForm(!showForm);
    };

    return (
        <div>
        <form>
            <button onClick={showMyForm}>Add new food</button>
        </form>
        {showForm && (
            <form>
            <input type="text" name="title" value={foodName} onClick={(e) => {setName(e.target.value)}} />
            <input type="number" name="year" value={foodCalories} onClick={(e) => {setCalories(e.target.value)}} />
            <input type="text" name="rating" value={foodImage} onClick={(e) => {setImage(e.target.value)}} />
            </form>
            )}
        </div>
    )
}

export default Add;