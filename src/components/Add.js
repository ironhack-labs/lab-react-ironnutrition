import React, { useState } from 'react'

function Add() {

    const [foodName, setName] = useState("");
    const [foodCalories, setCalories] = useState('');
    const [foodImage, setImage] = useState('https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png');

    const [showForm, setShowForm] = useState(false);

    //checks when state of form is set to false/true
    const showMyForm = (e) => {
        e.preventDefault()
        setShowForm(!showForm);
    };

    // submit button handling - code below can be used, needs refactoring
    // add props + onSubmit={handleSubmit}
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.setFood((prevFood) => {
    //       const newFood = {
    //         name: name,
    //         calories: calories,
    //         image: image,
    //       };
    //       return [newFood, ...prevFood];
    //     });


        // target values for each property
        const handleSetName = (e) => {
        setName(e.target.value);
        };
        const handleSetCalories = (e) => {
        setCalories(e.target.value);
        };
        const handleSetImage = (e) => {
        setImage(e.target.value);
        };

    return (
        <div>
        <form>
            <button onClick={showMyForm}>Add new food</button>
        </form>
        {showForm && (
            <form>
            <input type="text" name="title" value={foodName} onChange={(e) => {handleSetName(e.target.value)}} />
            <input type="number" name="year" value={foodCalories} onChange={(e) => {handleSetCalories(e.target.value)}} />
            <input type="text" name="rating" value={foodImage} onChange={(e) => {handleSetImage(e.target.value)}} />
            </form>
            )}
        </div>
    )
}


export default Add;