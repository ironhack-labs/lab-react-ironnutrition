import { Divider, Input } from 'antd';
import React, { useState } from "react";

// Iteration 4
function AddFoodForm({}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
        AddFoodForm(newFood)
      }  


    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     const newMovie = {
    //       title: title,
    //       year: "2000",
    //       rating: 9
    //     }
        
    //     setListOfMovies();
    
    //   }
      
  return (
    
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} key="changeName" type="text" onChange={(event) => {setName(event.target.value)} }/>
           
      <label>Image</label>
     <Input key="changeImage" value={image} type="text" onChange={(event) => {setImage(event.target.value)} }/>

      <label>Calories</label>
  <Input value={calories} key="changeCalories" type="number" onChange={(event) => {setCalories(event.target.value)} }/>

      <label>Servings</label>
      <Input value={servings} key="changeServings" type="number" onChange={(event) => {setServings(event.target.value)}} />

      <button type="submit">Create</button>
    </form>
  );
}
export default AddFoodForm;
