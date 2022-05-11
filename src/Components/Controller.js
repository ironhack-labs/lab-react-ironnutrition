import React from 'react';
import { useState } from 'react';

const Controller =({addNewFood})=>{
const [isApear, setIsApear] = useState(false)
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [calories, setCalories] = useState("");

const handleSubmit=(e)=>{
  e.preventDefault();
  
    const newFood = {
      name,
      image,
      calories
    };
    addNewFood(newFood)
    setImage("")
    setCalories("")
    setName("")
    setIsApear(false)
}

const showForm =()=>{
  setIsApear(true)
}

  return (
    <div className="Controller">
   
     <button onClick={showForm}>Show Form</button>
     {isApear &&
      <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder='add food name here' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" name="image" placeholder='add image url here' value={image} onChange={(e)=>{setImage(e.target.value)}} />
      <input type="number" min={0} name="calories" placeholder='add calories here' value={calories} onChange={(e)=>{setCalories(e.target.value)}}  />
      <button >Submit</button>
    </form>
      }
   
   
  </div>
  )
}

export default Controller