import React, {useState} from 'react'
import foods  from "../foods.json"
import Box from "../styles/Box"
import styled from "styled-components"
import Main from '../styles/Main'

function FoodBox(){
  let foodsArr = [...foods];
  const [array, setFoods] = useState(foodsArr);

  const [name, setName] = useState("")
  const [calories, setCalories] = useState(0)
  const [image, setImage] = useState("")  
  const [number, setNumber] = useState(1)


  function addNewOne(e){
    e.preventDefault();
    const newOne = {name, calories, image}
    setFoods([...array, newOne])
    setName("")
    setCalories(0);
    setImage("")
  }


  return (
    <Main>
      <div>
        <div class="container">
          <form onSubmit={addNewOne}>
            <h3>Add New Food</h3>
            <label for="name">Name : </label>
            <input type="text" name="name" value={name}onChange={e=>setName(e.target.value)} />

            <label for="calories">Calories : </label>
            <input type="number" name="calories" value={calories} onChange={e=>setCalories(e.target.value)} />

            <label for="name">Image : </label>
            <input type="text" name="image" value={image} onChange={e=>setImage(e.target.value)} />

            <button className="submitbtn">Add</button>
          </form>
        </div>

        {array.map((ele, index, arr)=>{
          return (
            <Box key={index}>
              <div>
                <img src={ele.image}></img>
              </div>
              <div className="text">
                <h3>{ele.name}</h3>
                <p>{ele.calories} Cal</p>
              </div>
              <div className="input">
                <input min="0" type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
              </div>
                <button className="btn">+</button>
            </Box>
          )
        })}
      </div>
    </Main>
  )
}

export default FoodBox
